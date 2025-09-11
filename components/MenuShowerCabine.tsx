"use client";
import { menuShowerCabine } from "@/data/data";
import { useRouter } from "next/navigation";
import React from "react";
import { AnimatedBackground } from "./motion-primitives/animated-background";

const MenuShowerCabine = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center space-x-12 hover:cursor-pointer ">
      <AnimatedBackground
        className="rounded-lg bg-zinc-100 dark:bg-zinc-800"
        transition={{
          type: "spring",
          bounce: 0.2,
          duration: 0.6,
        }}
        enableHover
      >
        {menuShowerCabine.map((item) => (
          <div
            key={item.id}
            className="p-2"
            onClick={() => {
              router.push(item.href);
            }}
          >
            <p className="text-lg font-medium text-black dark:text-white">
              {item.title}
            </p>
          </div>
        ))}
      </AnimatedBackground>
    </div>
  );
};

export default MenuShowerCabine;
