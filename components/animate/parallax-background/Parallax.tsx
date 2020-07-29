import React, { useState, useEffect, useRef, useMemo } from "react";
import { motion, useTransform, useViewportScroll, useMotionValue } from "framer-motion";
import { getSplitChildren, getHasDynamicRange, getBlurValue, getScaleValueMax, canUseDOM } from "./utils";
import ParallaxChildren from "./ParallaxChildren";
import { RangeProp } from "./types";
import { MotionUIImage } from "../../ui";

const initialStyle = {
  position: "absolute",
  left: "50%",
  WebkitBackfaceVisibility: "hidden",
  MozBackfaceVisibility: "hidden",
  MsBackfaceVisibility: "hidden",
};

type BgImageProp = string;
type BgImageSrcSetProp = string;
type BgImageSizesProp = string;

interface ParallaxProps {
  bgClassName?: string;
  bgImageStyle?: { [key: string]: any };
  blur?: RangeProp;
  scale?: RangeProp;
  children?: React.ReactNode;
  className?: string;
  contentClassName?: string;
  disabled?: boolean;
  bgImage?: BgImageProp;
  bgImageAlt?: string;
  bgImageSrcSet?: BgImageSrcSetProp;
  bgImageSizes?: BgImageSizesProp;
  bgStyle?: { [key: string]: any };
  parent?: HTMLElement;
  renderLayer?: (percentage: number) => any;
  strength?: number;
  style?: { [key: string]: any };
}

function Parallax(props: ParallaxProps) {
  const [bgImage, setBgImage] = useState(props.bgImage);
  const [bgImageSrcSet, setBgImageSrcSet] = useState(props.bgImageSrcSet);
  const [bgImageSizes, setBgImageSizes] = useState(props.bgImageSrcSet);
  const [splitChildren, setSplitChildren] = useState(getSplitChildren(props.children));

  // console.log("splitChildren", splitChildren);

  const node = useRef<HTMLElement>(null);
  const content = useRef<HTMLElement>(null);
  const parent = useRef<HTMLElement | Document>(props.parent);
  const bgImageRef = useRef<HTMLImageElement>(undefined);
  const isDynamicBlur: boolean = getHasDynamicRange(props.blur);
  const isDynamicScale: boolean = getHasDynamicRange(props.scale);

  const contentHeight = useRef<number>();
  const contentWidth = useRef<number>();
  const img = useRef<HTMLImageElement>();

  const { scrollY } = useViewportScroll();

  const [prevChildren, setPrevChildren] = useState<React.ReactNode>(null);

  const inverse: boolean = props.strength < 0;

  const autoHeight: boolean = useMemo(
    () =>
      !!(
        img.current &&
        img.current.naturalWidth / img.current.naturalHeight < contentWidth.current / getImageHeight()
      ),
    [img, contentWidth]
  );

  useEffect(() => {
    parent.current = props.parent || document;
    addListeners();

    if (bgImage) {
      loadImage(bgImage, bgImageSrcSet, bgImageSizes);
    } else {
      updatePosition();
    }

    return () => {
      removeListeners();
      releaseImage();
    };
  }, [bgImage, bgImageSrcSet, bgImageSizes]);

  if (props.children !== prevChildren) {
    // Row a changé depuis le dernier rendu. Met à jour isScrollingDown.
    setSplitChildren(getSplitChildren(props.children));
    setPrevChildren(props.children);
  }

  const mounted = useRef();
  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      // componentDidUpate logic
      if (parent.current !== props.parent) {
        removeListeners();
        parent.current = props.parent;
        if (parent) {
          addListeners();
        }
      }

      if (bgImage !== props.bgImage) {
        loadImage(props.bgImage, props.bgImageSrcSet, props.bgImageSizes);
      }
    }
  });

  const [elementTop, setElementTop] = useState(0);

  useEffect(() => {
    if (!node.current) return;
    const onResize = () => {
      setElementTop(node.current.offsetTop);
    };

    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [node]);

  /**
   * update window height and positions on window resize
   */
  const onWindowResize = () => {
    updatePosition();
  };

  const onWindowLoad = () => {
    updatePosition();
  };

  /**
   * The image height depends on parallax direction. If strength value is negative we have to give it more height
   * so there is no white space at start/end of container visiblility.
   */
  const getImageHeight = () => {
    const factor = inverse ? 2.5 : 1;
    const strengthWithFactor = factor * Math.abs(props.strength);
    return Math.floor(contentHeight.current + strengthWithFactor);
  };

  /**
   * updates scroll position of this component and also its width and height.
   * defines, if the background image should have autoHeight or autoWidth to
   * fit the component space optimally
   */
  const updatePosition = () => {
    if (content.current === null) {
      return;
    }

    contentHeight.current = content.current.getBoundingClientRect().height;
    contentWidth.current = node.current.getBoundingClientRect().width;
  };

  /**
   * Makes sure that the image was loaded before render
   */
  const loadImage = (
    bgImage: BgImageProp,
    bgImageSrcSet: BgImageSrcSetProp,
    bgImageSizes: BgImageSizesProp
  ) => {
    releaseImage();
    bgImageRef.current = new Image();
    bgImageRef.current.onload = () => {
      setBgImage(bgImage);
      setBgImageSrcSet(bgImageSrcSet);
      setBgImageSizes(bgImageSizes);
    };
    bgImageRef.current.onerror = bgImageRef.current.onload;
    bgImageRef.current.src = bgImage;
    bgImageRef.current.srcset = bgImageSrcSet || "";
    bgImageRef.current.sizes = bgImageSizes || "";
  };

  /**
   * Unbind eventlistener of bg image and delete it
   */
  const releaseImage = () => {
    if (bgImageRef.current) {
      bgImageRef.current.onload = null;
      bgImageRef.current.onerror = null;
      // bgImageRef.current = null;
    }
  };

  const addListeners = () => {
    if (canUseDOM() && parent.current) {
      window.addEventListener("resize", onWindowResize, false);
      window.addEventListener("load", onWindowLoad, false);
    }
  };

  const removeListeners = () => {
    if (canUseDOM()) {
      window.removeEventListener("resize", onWindowResize, false);
      window.removeEventListener("load", onWindowLoad, false);
    }
  };

  const height = autoHeight ? "auto" : `${getImageHeight()}px`;
  const width = !autoHeight ? "auto" : `${contentWidth.current}px`;

  const percentage = useTransform(scrollY, [elementTop - 500, elementTop + 500], [1, 0]);

  const blur = useMotionValue("none");
  const [percentageLayer, SetPercentageLayer] = useState(0);

  percentage.onChange((current) => {
    if (props.blur && !props.disabled) {
      blur.set(`blur(${getBlurValue(isDynamicBlur, props.blur, current)}px)`);
    } else {
      blur.set("none");
    }
    if (props.renderLayer) {
      SetPercentageLayer(Math.min(-(current - 1), 1));
    }
  });

  const y = useTransform(percentage, [1, 0], inverse ? [0, props.strength] : [-props.strength, 0]);

  const scale = useTransform(
    percentage,
    [1, 0],
    props.scale ? getScaleValueMax(isDynamicScale, props.scale) : [1, 1]
  );

  // props.scale ? getScaleValueMax(isDynamicScale, props.scale) : [1, 1]

  // console.log("pourcentage", pourcentage.current);
  // console.log("y", y.current);
  // console.log("blurTest", blurTest);

  return (
    <div
      className={`react-parallax ${props.className}`}
      style={{ position: "relative", overflow: "hidden", ...props.style }}
      ref={node}
    >
      {bgImage ? (
        <MotionUIImage
          className={props.bgClassName}
          src={bgImage}
          srcSet={bgImageSrcSet}
          sizes={bgImageSizes}
          ref={img}
          alt={props.bgImageAlt}
          style={{
            ...initialStyle,
            ...props.bgImageStyle,
            y: props.disabled ? 0 : y,
            x: "-50%",
            filter: blur,
            scale,
            height,
            width,
          }}
        />
      ) : null}
      {props.renderLayer ? props.renderLayer(percentageLayer) : null}
      {splitChildren.bgChildren.length > 0 ? (
        <motion.div
          style={{
            ...initialStyle,
            ...props.bgStyle,
            y: props.disabled ? 0 : y,
            x: "-50%",
          }}
        >
          {splitChildren.bgChildren}
        </motion.div>
      ) : null}
      <ParallaxChildren
        ref={content}
        //  onMount={onContentMount}
        className={props.contentClassName}
      >
        {splitChildren.children}
      </ParallaxChildren>
    </div>
  );
}

Parallax.defaultProps = {
  bgClassName: "react-parallax-bgimage",
  bgImageAlt: "",
  className: "",
  contentClassName: "",
  disabled: false,
  strength: 100,
};

export default Parallax;
