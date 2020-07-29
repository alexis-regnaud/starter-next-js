import React, { useEffect, useRef } from "react";
import { useThemeUI } from "theme-ui";
import { motion, Transition, useAnimation } from "framer-motion";

interface InstagramProps {
  width?: number | string;
  height?: number | string;
  color?: string;
  transition?: Transition;
}

const Instagram = ({ color = "white", height = "15px", width = "18px", transition }: InstagramProps) => {
  const { theme } = useThemeUI();
  const controls = useAnimation();

  useEffect(() => {
    controls.start({
      fill: (theme.colors![color] as string) ?? color,
      transition,
    });
  }, [color]);

  return (
    <svg width={width} height={height} viewBox="0 0 18 18" version="1.1">
      <title>instagram</title>
      <g id="Symbols" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <motion.g
          animate={controls}
          id="07"
          transform="translate(-868.000000, -34.000000)"
          fill={(theme.colors![color] as string) ?? color}
          fillRule="nonzero"
        >
          <g id="Group-9-Copy-3">
            <g transform="translate(868.000000, 0.000000)">
              <g id="instagram" transform="translate(0.000000, 34.000000)">
                <path
                  d="M13,0 L5,0 C2.23857625,0 0,2.23857625 0,5 L0,13 C0,15.7614237 2.23857625,18 5,18 L13,18 C15.7614237,18 18,15.7614237 18,13 L18,5 C18,2.23857625 15.7614237,0 13,0 Z M16.25,13 C16.2445095,14.7926463 14.7926463,16.2445095 13,16.25 L5,16.25 C3.20735374,16.2445095 1.75549053,14.7926463 1.75,13 L1.75,5 C1.75549053,3.20735374 3.20735374,1.75549053 5,1.75 L13,1.75 C14.7926463,1.75549053 16.2445095,3.20735374 16.25,5 L16.25,13 Z M14.75,4.25 C14.75,4.80228475 14.3022847,5.25 13.75,5.25 C13.1977153,5.25 12.75,4.80228475 12.75,4.25 C12.75,3.69771525 13.1977153,3.25 13.75,3.25 C14.3022847,3.25 14.75,3.69771525 14.75,4.25 Z M9,4.49998882 C6.51471863,4.49998882 4.5,6.51471863 4.5,9 C4.5,11.4852814 6.51471863,13.5 9,13.5 C11.4852814,13.5 13.5000112,11.4852814 13.5000112,9 C13.5026629,7.80571145 13.0294122,6.65957102 12.1849206,5.81507939 C11.340429,4.97058776 10.1942885,4.49733714 9,4.49998882 Z M9,11.75 C7.48121694,11.75 6.25,10.5187831 6.25,9 C6.25,7.48121694 7.48121694,6.25 9,6.25 C10.5187831,6.25 11.75,7.48121694 11.75,9 C11.75,10.5187831 10.5187831,11.75 9,11.75 Z"
                  id="Shape"
                />
              </g>
            </g>
          </g>
        </motion.g>
      </g>
    </svg>
  );
};

export default Instagram;
