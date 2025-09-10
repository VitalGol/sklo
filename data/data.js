import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
  ShowerHead,
  Fence,
} from "lucide-react";

export const menu = [
  {
    id: 0,
    title: "Про нас",
    item: "About",
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    id: 1,
    title: "Душові кабіни",
    item: "Cabine",
    icon: (
      <ShowerHead className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      // <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/cabine",
  },
  {
    id: 2,
    title: "Огорожi конструкцii",
    item: "Fence",
    icon: (
      <Fence className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      // <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/fence",
  },
  {
    id: 3,
    title: "Навіси та козирки",
    item: "Canopy",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/canopy",
  },
  {
    id: 4,
    title: "Офісні перегородки",
    item: "Partition",
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/partition",
  },
  {
    id: 5,
    title: "Email",
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/",
  },
  {
    id: 6,
    title: "Theme",
    icon: (
      <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "#",
  },
];

export const cabine = [
  {
    id: 0,
    src: "/Cabine/cab2.jpeg",
    alt: "Picture of the author",
    title: "Dialog",
    description: "Enhances modal presentations.",
  },
  {
    id: 1,
    src: "/Cabine/cab.jpg",
    alt: "Picture of the author",
    title: "Popover",
    description: "For small interactive overlays.",
  },
  {
    id: 2,
    src: "/Cabine/cab.jpg",
    alt: "Picture of the author",
    title: "Accordion",
    description: "Collapsible sections for more content.",
  },
  {
    id: 3,
    src: "/Cabine/cab.jpg",
    alt: "Picture of the author",
    title: "Collapsible",
    description: "Collapsible sections for more content.",
  },
  {
    id: 4,
    src: "/Cabine/cab.jpg",
    alt: "Picture of the author",
    title: "Drag to Reorder",
    description: "Reorder items with drag and drop.",
  },
  {
    id: 5,
    src: "/Cabine/cab.jpg",
    alt: "Picture of the author",
    title: "Swipe to Delete",
    description: "Delete items with swipe gestures.",
  },
];
