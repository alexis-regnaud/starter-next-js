import { Transition, Variants } from "framer-motion";
import merge from "lodash/merge";
import { getOpacity, getScale, getTranslate } from "./get-values";

interface EntranceTranslateParams {
  direction?: "up" | "down" | "left" | "right";
  delta?: string;
}

const entranceTranslate = ({
  direction = "down",
  delta = "30%",
}: EntranceTranslateParams = {}): Variants => ({
  hidden: { transform: getTranslate(direction, delta) },
  visible: { transform: getTranslate(direction, "0px") },
});

interface EntranceOpacityParams {
  direction?: "in" | "out";
  transition?: Transition;
}

const entranceOpacity = ({ direction = "in" }: EntranceOpacityParams = {}) => ({
  hidden: {
    opacity: getOpacity(direction).start,
  },
  visible: {
    opacity: getOpacity(direction).end,
  },
});

interface EntranceScaleParams {
  direction?: "in" | "out";
  delta?: number;
  transition?: Transition;
}

const entranceScale = ({ direction = "in", delta = 0.15 }: EntranceScaleParams = {}) => ({
  hidden: {
    scale: getScale(direction, delta).start,
  },
  visible: {
    scale: getScale(direction, delta).end,
  },
});

const mergeEntrances = (entrances: Variants[]) =>
  entrances.reduce((acc, entrance) => merge(acc, entrance), {});

export { entranceTranslate, entranceOpacity, entranceScale, mergeEntrances };
