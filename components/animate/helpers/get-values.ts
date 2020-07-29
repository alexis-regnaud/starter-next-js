type TranslateDirection = "up" | "down" | "right" | "left";

const getTranslate = (direction: TranslateDirection, delta: string) => {
  switch (direction) {
    case "up":
      return `translateY(${delta})`;
    case "down":
      return `translateY(-${delta})`;
    case "right":
      return `translateX(${delta})`;
    case "left":
      return `translateX(-${delta})`;
    default:
      throw new Error("direction not valide");
  }
};

type ScaleDirection = "in" | "out";

const getScale = (direction: ScaleDirection, delta: number) => {
  switch (direction) {
    case "in":
      return {
        start: 1,
        end: 1 + delta,
      };
    case "out":
      return {
        start: 1 + delta,
        end: 1,
      };
    default:
      throw new Error("direction not valide");
  }
};

type OpacityDirection = "in" | "out";

const getOpacity = (direction: OpacityDirection) => {
  switch (direction) {
    case "in":
      return {
        start: 0,
        end: 1,
      };
    case "out":
      return {
        start: 1,
        end: 0,
      };
    default:
      throw new Error("direction not valide");
  }
};

export { getTranslate, getScale, getOpacity };
