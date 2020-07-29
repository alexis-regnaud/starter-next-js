import { Direction } from "../../types/gesture";

interface UseScrollWheelProps {
  onWheel: ({ direction, deltaX, deltaY }: { direction: Direction; deltaX: number; deltaY: number }) => void;
}

export default function useScrollWheel({ onWheel }: UseScrollWheelProps) {
  const handleWheel = (e) => {
    if (e.deltaY > 25 || e.deltaY < -25 || e.deltaX > 25 || e.deltaX < -25) {
      if (e.deltaX > 0) {
        onWheel({ direction: Direction.left, deltaX: e.deltaX, deltaY: e.deltaY });
      } else if (e.deltaY < 0) {
        onWheel({ direction: Direction.up, deltaX: e.deltaX, deltaY: e.deltaY });
      } else if (e.deltaX < 0) {
        onWheel({ direction: Direction.right, deltaX: e.deltaX, deltaY: e.deltaY });
      } else {
        // e.deltaY > 0
        onWheel({ direction: Direction.down, deltaX: e.deltaX, deltaY: e.deltaY });
      }
    }
  };

  return { handleWheel };
}
