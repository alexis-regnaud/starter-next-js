import React, { useEffect, useMemo, useRef, useState } from "react";
import { jsx } from "theme-ui";
import {
  motion,
  MotionProps,
  useViewportScroll,
  useElementScroll,
  useTransform,
  useSpring,
  useMotionValue,
} from "framer-motion";
import { useScroll } from "react-use";
import { Element, scroller } from "react-scroll";
import { UIFlex } from "../ui";
import useCarousel from "../../hooks/useCarousel";

/** @jsx jsx */

export default function ReversedColumn() {
  const { scrollY } = useViewportScroll();

  const { handleWheel, isSliding, currentSlide } = useCarousel({ nbrSlides: 5 });

  // console.log("currentSlide", currentSlide);

  const wrapperColumnref = useRef<HTMLDivElement>(null);
  const contentHeight = useRef<number>();
  // const { y } = useScroll(scrollRef);
  const [initialRight, setInitialRight] = useState(0);
  const [elementTop, setElementTop] = useState(0);
  const [wrapperHeight, setWrapperHeight] = useState(0);
  const [itemHeight, setItemHeight] = useState(0);

  // Todo: replace 3 by nbr items

  useEffect(() => {
    // console.log("getBoundingClientRect", wrapperColumnref.current!.getBoundingClientRect());
    contentHeight.current = wrapperColumnref.current!.getBoundingClientRect().height;
    const itemHeightValue = contentHeight.current / 3;

    setInitialRight(-(contentHeight.current - itemHeightValue));
    setElementTop(wrapperColumnref.current!.offsetTop);
    setWrapperHeight(contentHeight.current);
    setItemHeight(itemHeightValue);
  }, []);

  const scrollTo = (name) => {
    console.log("scrollto", name);

    scroller.scrollTo(name, {
      // duration: 800,
      delay: 0,
      smooth: true,
    });
  };

  // console.log("elementTop", elementTop);

  /*  useEffect(() => {
  //  console.log("contentHeight", contentHeight.current);
    console.log("itemHeight", itemHeight.current);

    // console.log("heightItem", heightItem);
  }, [contentHeight]); */

  // const ref = useRef();
  // const { scrollYProgress } = useElementScroll(ref);

  /*  scrollYProgress.onChange((current) => {
    console.log("scrollY", current);
  }); */

  const scroll = useTransform(
    scrollY,
    [0, elementTop + wrapperHeight],
    [initialRight, wrapperHeight - itemHeight]
  );

  const y = useTransform(scrollY, (value) => value * 2);
  const y2 = useTransform(y, [0, wrapperHeight + itemHeight], [0, wrapperHeight + itemHeight]);

  y.onChange((current) => {
    // console.log("current", current);
  });

  useEffect(() => {
    if (currentSlide > 0) {
      scrollTo(`item-${currentSlide}`);
    }
  }, [currentSlide]);

  // console.log("-itemHeight * currentSlide", -itemHeight * currentSlide);

  const wrapperOffset = useMotionValue(-itemHeight * currentSlide);

  wrapperOffset.onChange((current) => {
    console.log("wrapperOffset", current);
  });

  return (
    <>
      <WrapperColumn ref={wrapperColumnref} onWheel={handleWheel}>
        <Column>
          <Element name="item-1">
            <Item sx={{ backgroundColor: "red" }}>
              <WrapperContent>
                <h1 sx={{ color: "white" }}>Left 1</h1>
              </WrapperContent>
            </Item>
          </Element>
          <Element name="item-2">
            <Item sx={{ backgroundColor: "green" }}>
              <WrapperContent>
                <h1 sx={{ color: "white" }}>Left 2</h1>
              </WrapperContent>
            </Item>
          </Element>
          <Element name="item-3">
            <Item sx={{ backgroundColor: "blue" }}>
              <WrapperContent>
                <h1 sx={{ color: "white" }}>Left 3</h1>
              </WrapperContent>
            </Item>
          </Element>
        </Column>
        <Column style={{ marginTop: initialRight }}>
          <Item sx={{ backgroundColor: "orange" }}>
            <WrapperContent>
              <h1 sx={{ color: "white" }}>Right 3</h1>
            </WrapperContent>
          </Item>
          <Item sx={{ backgroundColor: "yellow" }}>
            <WrapperContent>
              <h1 sx={{ color: "white" }}>Right 2</h1>
            </WrapperContent>
          </Item>
          <Item sx={{ backgroundColor: "pink" }}>
            <WrapperContent>
              <h1 sx={{ color: "white" }}>Right 1</h1>
            </WrapperContent>
          </Item>
        </Column>
      </WrapperColumn>
    </>
  );
}

const WrapperColumn = React.forwardRef((props, ref) => (
  <section
    ref={ref}
    {...props}
    sx={{
      position: "relative",
      overflow: "hidden",
      /* display: "flex" */
    }}
  />
));

const Column = React.forwardRef((props: MotionProps & { children: React.ReactNode }, ref) => (
  <motion.div
    ref={ref}
    {...props}
    sx={{
      float: "left",
      width: "50%",
      /* display: "flex", flex: "0 0 50%", flexDirection: "column", */
    }}
  />
));

const Item = (props) => <div {...props} sx={{ height: "100vh" }} />;

const WrapperContent = (props) => <UIFlex {...props} sx={{ height: "100%" }} />;
