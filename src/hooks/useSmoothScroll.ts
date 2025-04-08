import { useTransform, useSpring, MotionValue } from "framer-motion";

export const useSmoothScrollTransform = (scrollY: MotionValue<number>, input: [number, number], output: [number, number]) => {
  const raw = useTransform(scrollY, input, output);
  return useSpring(raw, {
    stiffness: 80,
    damping: 20,
  });
};