import React, { useEffect } from "react";
import { useThemeUI } from "theme-ui";
import { Transition, useAnimation, motion } from "framer-motion";

interface CartProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  transition?: Transition;
}

const Cart = ({ color = "white", height = "24px", width = "18px", transition }: CartProps) => {
  const { theme } = useThemeUI();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      stroke: (theme.colors![color] as string) ?? color,
      transition,
    });
  }, [color]);

  return (
    <svg width={width} height={height} viewBox="0 0 18 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <title>cart</title>
      <g
        id="Page-1"
        stroke="none"
        strokeWidth="1"
        fill="none"
        fillRule="evenodd"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <motion.g
          id="Olive-&amp;-Dom---Desktop"
          transform="translate(-972.000000, -56.000000)"
          stroke={(theme.colors![color] as string) ?? color}
        >
          <g id="Group-12" transform="translate(973.000000, 52.000000)">
            <g id="cart" transform="translate(0.000000, 4.000000)">
              <g>
                <path
                  d="M1.9311192,8.26762821 L13.4230475,8.26762821 C13.9476861,8.26762821 14.3831272,8.67307575 14.4205062,9.19638116 L15.277649,21.1963812 C15.3169977,21.7472624 14.9023186,22.2257382 14.3514374,22.2650869 C14.3277261,22.2667806 14.303962,22.2676282 14.2801903,22.2676282 L1.07397635,22.2676282 C0.521691596,22.2676282 0.0739763463,21.819913 0.0739763463,21.2676282 C0.0739763463,21.2438565 0.0748239848,21.2200924 0.0765176464,21.1963812 L0.933660504,9.19638116 C0.971039461,8.67307575 1.40648054,8.26762821 1.9311192,8.26762821 Z"
                  id="Rectangle"
                  strokeWidth="1.5"
                />
                <path
                  d="M3.54326923,10.8108974 L3.54326923,3.50320513 C3.54326923,2.01628465 5.39404085,0.810897436 7.67708333,0.810897436 C9.96012582,0.810897436 11.8108974,2.01628465 11.8108974,3.50320513 L11.8108974,10.8108974"
                  id="Path"
                  strokeWidth="1.5"
                />
              </g>
            </g>
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default Cart;
