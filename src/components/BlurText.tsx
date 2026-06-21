"use client";

import {
  animate,
  motion,
  useInView,
  useMotionValue,
  useSpring,
  useTransform,
} from "motion/react";
import { useEffect, useMemo, useRef } from "react";

type BlurTextProps = {
  text: string;
  delay?: number;
  className?: string;
  animateBy?: "words" | "letters";
  direction?: "top" | "bottom";
  threshold?: number;
  rootMargin?:
    | `${number}px`
    | `${number}px ${number}px`
    | `${number}px ${number}px ${number}px`
    | `${number}px ${number}px ${number}px ${number}px`
    | `${number}%`
    | `${number}% ${number}%`
    | `${number}% ${number}% ${number}%`
    | `${number}% ${number}% ${number}% ${number}%`;
  stepDuration?: number;
  onAnimationComplete?: () => void;
};

type AnimatedSegmentProps = {
  children: string;
  delay: number;
  direction: "top" | "bottom";
  stepDuration: number;
  onComplete?: () => void;
};

function AnimatedSegment({
  children,
  delay,
  direction,
  stepDuration,
  onComplete,
}: AnimatedSegmentProps) {
  const progress = useMotionValue(0);
  const smoothProgress = useSpring(progress, {
    damping: 18,
    stiffness: 120,
    mass: 0.8,
  });
  const y = useTransform(
    smoothProgress,
    [0, 1],
    [direction === "top" ? "-0.75em" : "0.75em", "0em"]
  );
  const filter = useTransform(smoothProgress, [0, 1], ["blur(10px)", "blur(0px)"]);
  const opacity = useTransform(smoothProgress, [0, 1], [0, 1]);

  useEffect(() => {
    const controls = animate(progress, 1, {
      delay,
      duration: stepDuration,
      ease: [0.25, 0.1, 0.25, 1],
      onComplete,
    });

    return controls.stop;
  }, [delay, onComplete, progress, stepDuration]);

  return (
    <motion.span
      className="inline-block will-change-transform"
      style={{ y, filter, opacity }}
    >
      {children}
    </motion.span>
  );
}

export default function BlurText({
  text,
  delay = 0,
  className = "",
  animateBy = "words",
  direction = "bottom",
  threshold = 0.1,
  rootMargin = "0px",
  stepDuration = 0.35,
  onAnimationComplete,
}: BlurTextProps) {
  const containerRef = useRef<HTMLSpanElement>(null);
  const hasCompletedRef = useRef(false);
  const isInView = useInView(containerRef, { once: true, amount: threshold, margin: rootMargin });

  const segments = useMemo(() => {
    if (animateBy === "letters") return Array.from(text);
    return text.split(" ");
  }, [animateBy, text]);

  return (
    <span
      ref={containerRef}
      className={`inline-flex flex-wrap items-baseline justify-center overflow-visible ${className}`.trim()}
    >
      {segments.map((segment, index) => {
        const suffix = animateBy === "words" && index < segments.length - 1 ? "\u00A0" : "";
        const segmentDelay = isInView ? delay + index * stepDuration : 0;
        const isLast = index === segments.length - 1;

        return isInView ? (
          <AnimatedSegment
            key={`${segment}-${index}`}
            delay={segmentDelay}
            direction={direction}
            stepDuration={stepDuration}
            onComplete={
              isLast
                ? () => {
                    if (!hasCompletedRef.current) {
                      hasCompletedRef.current = true;
                      onAnimationComplete?.();
                    }
                  }
                : undefined
            }
          >
            {segment + suffix}
          </AnimatedSegment>
        ) : (
          <span key={`${segment}-${index}`} className="inline-block opacity-0 blur-[10px]">
            {segment + suffix}
          </span>
        );
      })}
    </span>
  );
}
