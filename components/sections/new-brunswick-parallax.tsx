"use client";

import Image from "next/image";
import {
  useEffect,
  useEffectEvent,
  useRef,
  useState,
  type CSSProperties,
} from "react";

export function NewBrunswickParallax() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const frameRef = useRef<number | null>(null);
  const [progress, setProgress] = useState(0.5);

  const updateParallax = useEffectEvent(() => {
    const section = sectionRef.current;

    if (!section) {
      return;
    }

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (reducedMotion) {
      setProgress(0.5);
      return;
    }

    const rect = section.getBoundingClientRect();
    const viewportHeight = window.innerHeight || 1;
    const travelDistance = rect.height + viewportHeight;
    const nextProgress = (viewportHeight - rect.top) / travelDistance;
    const clampedProgress = Math.min(1, Math.max(0, nextProgress));

    setProgress((current) =>
      Math.abs(current - clampedProgress) < 0.01 ? current : clampedProgress,
    );
  });

  useEffect(() => {
    const scheduleUpdate = () => {
      if (frameRef.current !== null) {
        return;
      }

      frameRef.current = window.requestAnimationFrame(() => {
        frameRef.current = null;
        updateParallax();
      });
    };

    scheduleUpdate();
    window.addEventListener("scroll", scheduleUpdate, { passive: true });
    window.addEventListener("resize", scheduleUpdate);

    return () => {
      window.removeEventListener("scroll", scheduleUpdate);
      window.removeEventListener("resize", scheduleUpdate);

      if (frameRef.current !== null) {
        window.cancelAnimationFrame(frameRef.current);
      }
    };
  }, []);

  const imageStyle: CSSProperties = {
    transform: `translate3d(0, ${(progress - 0.5) * 180}px, 0) scale(1.18)`,
  };

  const firstSentenceOpacity = Math.min(
    1,
    Math.max(0, 1 - (progress - 0.3) / 0.2),
  );
  const secondSentenceOpacity = Math.min(
    1,
    Math.max(0, (progress - 0.52) / 0.18),
  );

  const firstSentenceStyle: CSSProperties = {
    opacity: firstSentenceOpacity,
    transform: `translate3d(0, ${24 - progress * 72}px, 0)`,
  };

  const secondSentenceStyle: CSSProperties = {
    opacity: secondSentenceOpacity,
    transform: `translate3d(0, ${44 - progress * 64}px, 0)`,
  };

  return (
    <div
      ref={sectionRef}
      className="relative left-1/2 w-screen -translate-x-1/2 bg-[#08100c]"
    >
      <div className="relative h-[92vh] min-h-[26rem] sm:h-[102vh] sm:min-h-[32rem] lg:h-[112vh] lg:min-h-[40rem]">
        <div className="sticky top-0 h-screen overflow-hidden">
          <div
            className="absolute inset-0 will-change-transform"
            style={imageStyle}
          >
            <Image
              src="/media/new-brunswick-roadmap.png"
              alt="New Brunswick shoreline with autumn trees reflected in still water"
              fill
              sizes="100vw"
              className="object-cover lg:object-bottom"
            />
          </div>
          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(8,12,10,0.06),rgba(8,12,10,0.16)_20%,rgba(8,12,10,0.34)_52%,rgba(8,12,10,0.88)_100%)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="mx-auto w-full max-w-5xl px-4 sm:px-8 lg:px-12">
              <div className="relative min-h-[9rem] sm:min-h-[6.5rem] lg:min-h-[8rem]">
                <p
                  className="absolute inset-0 mx-auto flex max-w-[12ch] items-center justify-center text-center font-heading text-[1.2rem] leading-[1.08] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)] sm:max-w-none sm:whitespace-nowrap sm:text-[2rem] sm:leading-tight lg:text-[2.95rem] lg:leading-[1.03]"
                  style={firstSentenceStyle}
                >
                  We turn Atlantic Canada&apos;s forestry waste into
                  battery-grade graphite.
                </p>
                <p
                  className="absolute inset-0 mx-auto flex max-w-[15ch] items-center justify-center text-center font-heading text-[1.2rem] leading-[1.08] text-white drop-shadow-[0_10px_26px_rgba(0,0,0,0.35)] sm:max-w-none sm:whitespace-nowrap sm:text-[2rem] sm:leading-tight lg:text-[2.95rem] lg:leading-[1.03]"
                  style={secondSentenceStyle}
                >
                  The material powering the electric vehicle revolution made
                  here, from here.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
