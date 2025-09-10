"use client";
import React, { useEffect, useMemo, useRef, useState } from "react";
import { PhoneCall } from "lucide-react";
export type HotlinePhoneProps = {
  phone?: string; // "+380441234567"
  delayMs?: number; // 5000
  size?: number; // диаметр кнопки в px (например 64)
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
  bgClassName?: string; // классы Tailwind для фона кнопки
  ringClassName?: string; // классы Tailwind для рипплов
};

const POSITIONS: Record<NonNullable<HotlinePhoneProps["position"]>, string> = {
  "bottom-right": "right-4 bottom-4",
  "bottom-left": "left-28 bottom-4",
  "top-right": "right-4 top-4",
  "top-left": "left-4 top-4",
};
export default function HotlinePhone({
  phone = "+380000000000",
  delayMs = 5000,
  size = 52,
  position = "bottom-left",
  bgClassName = "bg-red-500 hover:bg-red-400",
  ringClassName = "bg-red-400/20",
}: HotlinePhoneProps) {
  const [active, setActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);
  const timerRef = useRef<number | null>(null);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const onChange = () => setReducedMotion(mq.matches);
    onChange();
    mq.addEventListener?.("change", onChange);
    return () => mq.removeEventListener?.("change", onChange);
  }, []);
  useEffect(() => {
    timerRef.current = window.setTimeout(() => setActive(true), delayMs);
    return () => {
      if (timerRef.current) window.clearTimeout(timerRef.current);
    };
  }, [delayMs]);

  const diameter = size;
  const rippleSize1 = Math.round(diameter * 1.8);
  const rippleSize2 = Math.round(diameter * 2.3);
  const rippleSize3 = Math.round(diameter * 2.8);

  const btnClasses = useMemo(
    () =>
      [
        "relative select-none",
        "rounded-full shadow-lg",
        "transition focus:outline-none focus-visible:ring-4 focus-visible:ring-red-300",
        "text-white flex items-center justify-center",
        bgClassName,
      ].join(" "),
    [bgClassName]
  );

  const wrapperPos = POSITIONS[position];

  return (
    <div
      className={`fixed z-50 ${wrapperPos}`}
      style={{ pointerEvents: "auto" }}
    >
      {/* Кнопка */}
      <a
        href={`tel:${phone}`}
        className={btnClasses}
        style={{ width: diameter, height: diameter }}
        aria-label={`Зателефонувати: ${phone}`}
        title={`Зателефонувати: ${phone}`}
        onMouseEnter={() => setActive(true)}
      >
        {/* Рипплы */}
        {!reducedMotion && (
          <>
            <span
              aria-hidden
              className={`absolute inset-0 -z-10 rounded-full ${ringClassName}`}
              style={{
                width: rippleSize1,
                height: rippleSize1,
                left: `calc(50% - ${rippleSize1 / 2}px)`,
                top: `calc(50% - ${rippleSize1 / 2}px)`,
                animation: active ? "ripple 2.4s ease-out infinite" : "none",
              }}
            />
            <span
              aria-hidden
              className={`absolute inset-0 -z-10 rounded-full ${ringClassName}`}
              style={{
                width: rippleSize2,
                height: rippleSize2,
                left: `calc(50% - ${rippleSize2 / 2}px)`,
                top: `calc(50% - ${rippleSize2 / 2}px)`,
                animation: active
                  ? "ripple 2.4s ease-out 0.4s infinite"
                  : "none",
              }}
            />
            <span
              aria-hidden
              className={`absolute inset-0 -z-10 rounded-full ${ringClassName}`}
              style={{
                width: rippleSize3,
                height: rippleSize3,
                left: `calc(50% - ${rippleSize3 / 2}px)`,
                top: `calc(50% - ${rippleSize3 / 2}px)`,
                animation: active
                  ? "ripple 2.4s ease-out 0.8s infinite"
                  : "none",
              }}
            />
          </>
        )}

        {/* Иконка трубки */}
        <PhoneCall
          aria-hidden
          className={active && !reducedMotion ? "animate-callshake" : ""}
          size={Math.round(diameter * 0.5)}
        />
      </a>
      {/* Локальные keyframes */}
      <style jsx global>{`
        @keyframes callshake {
          0%,
          100% {
            transform: rotate(0deg) translateZ(0);
          }
          10% {
            transform: rotate(12deg);
          }
          20% {
            transform: rotate(-12deg);
          }
          30% {
            transform: rotate(10deg);
          }
          40% {
            transform: rotate(-10deg);
          }
          50% {
            transform: rotate(8deg);
          }
          60% {
            transform: rotate(-8deg);
          }
          70% {
            transform: rotate(5deg);
          }
          80% {
            transform: rotate(-5deg);
          }
          90% {
            transform: rotate(2deg);
          }
        }
        .animate-callshake {
          animation: callshake 1.4s ease-in-out infinite;
          transform-origin: 50% 50%;
        }

        @keyframes ripple {
          0% {
            transform: scale(0.6);
            opacity: 0;
          }
          15% {
            opacity: 1;
          }
          100% {
            transform: scale(1);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
}
