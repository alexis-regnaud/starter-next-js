import { Reducer, Ref, useCallback, useEffect, useReducer, useRef, useState } from "react";
import { useDebounce, useKeyPress, useWindowScroll } from "react-use";
import { Direction } from "../types/gesture";
import useScrollWheel from "./gesture/useScrollWheel";

const KEY_UP = 38;
const KEY_DOWN = 40;

interface State {
  currentSlide: number;
  isSliding: boolean;
}
enum Types {
  nextSlide = "nextSlide",
  prevSlide = "prevSlide",
  setIsSliding = "setIsSliding",
}

type Action =
  | { type: Types.nextSlide }
  | { type: Types.prevSlide }
  | { type: Types.setIsSliding; value: boolean };

const INIT_STATE: State = {
  currentSlide: 0,
  isSliding: false,
};

const carouselReducer: Reducer<State, Action> = (state, action) => {
  const { currentSlide } = state;

  switch (action.type) {
    case useCarousel.types.nextSlide:
      return {
        ...state,
        currentSlide: currentSlide + 1,
      };
    case useCarousel.types.prevSlide:
      return {
        ...state,
        currentSlide: currentSlide - 1,
      };
    case useCarousel.types.setIsSliding:
      return {
        ...state,
        isSliding: action.value,
      };
    default:
      return state;
  }
};

interface UseCarouselParams {
  initialState?: State;
  nbrSlides: number;
  reducer?: Reducer<State, Action>;
}

export default function useCarousel({
  initialState = INIT_STATE,
  nbrSlides,
  reducer = carouselReducer,
}: UseCarouselParams) {
  const ref = useRef<HTMLDivElement>();

  const initialStateRef = useRef(initialState);
  const [{ currentSlide, isSliding }, dispatch] = useReducer(reducer, initialStateRef.current);
  const [currentMouseWheel, setCurrentMouseWheel] = useState({ deltaY: 0, deltaX: 0 });
  const previousTouchMove = useRef(null);
  const { y } = useWindowScroll();

  const prevSlide = () => {
    if (currentSlide > 0 && !isSliding) {
      dispatch({ type: Types.prevSlide });
      dispatch({ type: Types.setIsSliding, value: true });
    }
  };

  const nextSlide = () => {
    if (currentSlide < nbrSlides - 1 && !isSliding) {
      dispatch({ type: Types.nextSlide });
      dispatch({ type: Types.setIsSliding, value: true });
    }
  };

  const onWheel = useCallback(
    ({ direction, deltaY, deltaX }: { direction: Direction; deltaY: number; deltaX: number }) => {
      switch (direction) {
        case Direction.left:
        case Direction.up:
          prevSlide();
          break;
        case Direction.right:
        case Direction.down:
          nextSlide();
          break;
        default:
          throw new Error("unknown direction");
      }

      setCurrentMouseWheel(({ deltaY: prevDeltaY, deltaX: prevDeltaX }) => {
        return {
          deltaY: prevDeltaY === deltaY ? prevDeltaY + 1 : deltaY,
          deltaX: prevDeltaX === deltaX ? prevDeltaX + 1 : deltaX,
        };
      });
    },
    [prevSlide, nextSlide, setCurrentMouseWheel, currentSlide, isSliding]
  );

  const { handleWheel } = useScrollWheel({ onWheel });

  const touchMove = useCallback(
    (event) => {
      if (previousTouchMove?.current !== null) {
        if (event.touches[0].clientY > previousTouchMove.current!) {
          prevSlide();
        } else {
          nextSlide();
        }
      } else {
        previousTouchMove.current = event.touches[0].clientY;
      }
    },
    [prevSlide, nextSlide, previousTouchMove, currentSlide, isSliding]
  );

  const keyPress = useCallback(
    (event) => {
      if (event.keyCode === KEY_UP) {
        prevSlide();
      }
      if (event.keyCode === KEY_DOWN) {
        nextSlide();
      }
    },
    [prevSlide, nextSlide, currentSlide, isSliding]
  );

  useEffect(() => {
    // ref.current.addEventListener("touchmove", touchMove);
    //  ref.current.addEventListener("keydown", keyPress);
    return () => {
      //   ref.current.removeEventListener("touchmove", touchMove);
      //   ref.current.removeEventListener("keydown", keyPress);
    };
  }, [touchMove, keyPress]);

  const isKeysNextPressed = useKeyPress((event) => event.key === "ArrowDown" || event.key === "ArrowRight");
  const isKeysPrevPressed = useKeyPress((event) => event.key === "ArrowUp" || event.key === "ArrowLeft");

  /*  useEffect(() => {
    if (isKeysNextPressed[0]) {
      nextSlide();
    }
    if (isKeysPrevPressed[0]) {
      prevSlide();
    }
  }, [isKeysNextPressed, isKeysPrevPressed]); */

  const [_] = useDebounce(
    () => {
      if (isSliding) {
        // console.log(" sliding enable");
        dispatch({ type: Types.setIsSliding, value: false });
      }
    },
    300,
    [currentMouseWheel.deltaY, currentMouseWheel.deltaX, isKeysNextPressed[0], isKeysPrevPressed[0], y]
  );

  return { ref, handleWheel, currentSlide, isSliding, prevSlide, nextSlide };
}

useCarousel.reducer = carouselReducer;
useCarousel.types = Types;
