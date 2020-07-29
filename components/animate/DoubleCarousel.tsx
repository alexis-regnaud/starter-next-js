/* pages/index.js */
import React, { useEffect, useRef, useState } from "react";
import { jsx } from "theme-ui";
import { motion, transform, useMotionValue } from "framer-motion";
import disableScroll from "disable-scroll";
import { useWindowScroll } from "react-use";
import { useInView } from "react-intersection-observer";
import { Element, scroller } from "react-scroll";
import { Page as Carousel } from "./carousel/Carousel";
import useCarousel from "../../hooks/useCarousel";

/** @jsx jsx */

export default function DoubleCarousel() {
  const [isSlideMounted, setIsSlideMounted] = useState(false);

  const { y } = useWindowScroll();
  const contentOffset = useMotionValue(0);
  const [inViewRef, inView, entry] = useInView({ threshold: 1, rootMargin: "-66px 0px 0px 0px" });

  const reducer = (state, action) => {
    if (
      (action.type === useCarousel.types.prevSlide || action.type === useCarousel.types.nextSlide) &&
      !inView
    ) {
      return state;
    }
    if (action.type === useCarousel.types.setIsSliding && !inView) {
      return state;
    }
    return useCarousel.reducer(state, action);
  };

  const scale = 1;
  const nbrSlides = 5;

  const { ref, handleWheel, isSliding, currentSlide } = useCarousel({ nbrSlides, reducer });

  const range = Array.from(Array(nbrSlides)).map((_, i) => i);
  const pages = React.useMemo(
    () =>
      range.map((i) => (
        <motion.div
          key={i}
          style={{
            height: "calc(100vh - 66px)",
            width: "50vw",
            // borderRadius: 16,
            border: "8px solid rgba(255, 255, 255, .15)",
            backgroundColor: transform(i, [0, nbrSlides - 1], ["#fe0689", "#7704ff"]),
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <h1 style={{ color: "white" }}>{i + 1}</h1>
        </motion.div>
      )),
    [scale, range, nbrSlides]
  );

  useEffect(() => {
    if (contentOffset.get() < 0) {
      setIsSlideMounted(true);
    }
  }, [contentOffset.get()]);

  /*  useEffect(() => {
    if (currentSlide < pages.length - 1 && y === 0) {
      setTimeout(() => {
        disableScroll.on();
      }, 50);
    } else if (!isSliding) {
      disableScroll.off();
    }
  }, [currentSlide, isSliding, ref]); */

  // console.log("ref", ref?.current?.getBoundingClientRect());

  // console.log(inView, entry);

  useEffect(() => {
    if (inView) {
      console.log(inView);
      // disableScroll.on();
    }
  }, [inView]);

  const handleOnAnimationIsComplete = () => {
    if (currentSlide === nbrSlides - 1 || currentSlide === 0) {
      // disableScroll.off();
    }
  };

  const ref2 = useRef();

  useEffect(() => {
    console.log("ref2", ref2?.current?.getBoundingClientRect());

    if (ref2?.current?.getBoundingClientRect().y < 66) {
      scroller.scrollTo("myScrollToElement", {
        duration: 0,
        //  smooth: true,
        offset: -66, // Scrolls to element + 50 pixels down the page
      });
      // disableScroll.on();
    }
  }, [ref2?.current?.getBoundingClientRect().y]);

  return (
    <div ref={ref2}>
      <Element name="myScrollToElement">
        <div onWheel={handleWheel} style={{ display: "flex" }}>
          <Carousel
            direction="vertical"
            style={{
              height: "calc(100vh - 66px)",
              width: "50vw",
            }}
            gap={0}
            currentPage={currentSlide}
            transition={{ ease: [0.7, 0, 0.3, 1], duration: 1 }}
            onAnimationComplete={handleOnAnimationIsComplete}
          >
            {pages}
          </Carousel>

          <Carousel
            contentOffset={contentOffset}
            direction="vertical"
            style={{
              height: "calc(100vh - 66px)",
              width: "50vw",
            }}
            gap={0}
            currentPage={pages.length - 1 - currentSlide}
            transition={{ ease: [0.7, 0, 0.3, 1], duration: isSlideMounted ? 1 : 0 }}
          >
            {pages}
          </Carousel>
        </div>
      </Element>
    </div>
  );
}
