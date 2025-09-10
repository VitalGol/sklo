"use client";
// import { Calculator } from "@/components/Calculator";
import { cabine } from "@/data/data";
import { AnimatedBackground } from "@/components/motion-primitives/animated-background";
import { useRouter } from "next/navigation";

import Image from "next/image";
import { TextEffect } from "@/components/motion-primitives/text-effect";

const Cabine = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="text-2xl font-semibold">
        <TextEffect per="char" preset="fade">
          Скляні душові кабіни
        </TextEffect>
      </h1>

      <div className="grid grid-cols-2 p-10 md:grid-cols-3">
        <AnimatedBackground
          className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
          transition={{
            type: "spring",
            bounce: 0.2,
            duration: 0.6,
          }}
          enableHover
        >
          {cabine.map((item, index) => (
            <div
              key={index}
              data-id={`card-${index}`}
              onClick={() => {
                router.push(`/cabine/${item.id}`);
              }}
            >
              <div className="flex select-none flex-col justify-center items-center space-y-1 p-4 hover:cursor-pointer">
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={250}
                  height={200}
                  className="flex justify-center items-center"
                />
                <h3 className="text-base font-medium text-zinc-800 dark:text-zinc-50">
                  {item.title}
                </h3>
                <p className="text-base text-zinc-600 dark:text-zinc-400">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </AnimatedBackground>
      </div>
    </div>
  );
};

export default Cabine;
