"use client";

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from "@/components/motion-primitives/dock";
import { useTheme } from "next-themes";
import { useRouter } from "next/navigation";
import { menu } from "@/data/data.js";

export function Menu() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const goToItem = (href: string) => {
    if (href === "#") {
      const themeMode = localStorage.getItem("theme");
      if (themeMode === "dark") {
        setTheme("light");
      }
      if (themeMode === "light") {
        setTheme("dark");
      }
    } else {
      router.push(href);
    }
  };
  return (
    <div className="absolute top-1 right-1/8 max-w-full -translate-x-1/8">
      {/* <div className="absolute top-1 left-1/2 max-w-full -translate-x-1/2"> */}
      <Dock className="items-end pb-3">
        {menu.map((item, idx) => (
          <DockItem
            key={idx}
            className="aspect-square rounded-full bg-gray-200 dark:bg-neutral-800"
            onClick={() => {
              goToItem(item.href);
            }}
          >
            <DockLabel>{item.title}</DockLabel>
            <DockIcon>{item.icon}</DockIcon>
          </DockItem>
        ))}
      </Dock>
    </div>
  );
}
