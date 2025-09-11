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
export const menuShowerCabine = [
  {
    id: 0,
    title: "Кутові душові кабіни",

    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/cabine",
  },
  {
    id: 1,
    title: "Скляні душові двері",

    icon: (
      <ShowerHead className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      // <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/cabine/cabine-doors",
  },
  {
    id: 2,
    title: "Перегородки для душу",

    icon: (
      <Fence className="h-full w-full text-neutral-600 dark:text-neutral-300" />
      // <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/cabine/cabine-partitions",
  },
  {
    id: 3,
    title: "Душова шторка на ванну",

    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: "/cabine/cabine-curtains",
  },
];

export const cabine = [
  {
    id: 0,
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    title: "Dialog",
    description: "Enhances modal presentations.",
  },
  {
    id: 1,
    src: "/Cabine/cab1.jpeg",
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

  {
    id: 1,
    title: "BARCELONA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 2,
    title: "MENTONA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 3,
    title: "LEGIA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 4,
    title: "ARSENAL кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 5,
    title: "MILAN кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 6,
    title: "VILLAR кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 7,
    title: "MARTI кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 8,
    title: "RIMINI кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 9,
    title: "SILVA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 10,
    title: "GERTA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 11,
    title: "OLVIA кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 12,
    title: "TOTTENHAM кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 13,
    title: "INTER кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 14,
    title: "DORTMUND кутова душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 15,
    title: "LADIS пристінна душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 16,
    title: "STUTTGART пристінна душова",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 17,
    title: "SIENA пристінна душова кабіна",
    src: "/Cabine/cab1.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
];
export const showerDoors = [
  {
    id: 0,
    title: "VICTORIA двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 1,
    title: "RENN двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 2,
    title: "FLORENTIA двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 3,
    title: "SLAVIA двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 4,
    title: "BAVARIA двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 5,
    title: "SELTIC двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 6,
    title: "MONACO двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 7,
    title: "GRANADA двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 8,
    title: "MARSEL двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 9,
    title: "GENK двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 10,
    title: "LIVERPOOL двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 11,
    title: "AJAX двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 12,
    title: "ATLETIC L двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 13,
    title: "ATLETIC R двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 14,
    title: "BREMEN L двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 15,
    title: "BREMEN R двері для душу",
    src: "/doors/doors.jpeg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
];
export const showerPartitions = [
  {
    id: 0,
    title: "ROMA перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 1,
    title: "REIMS перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 2,
    title: "LANS перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 3,
    title: "PARI перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 4,
    title: "PALERMO перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 5,
    title: "TORINO перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 6,
    title: "NAPOLI перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 7,
    title: "BRIGHTON перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 8,
    title: "BORDO перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 9,
    title: "LESTER перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 10,
    title: "ASTON перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 11,
    title: "LION перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 12,
    title: "MANCHESTER перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
  {
    id: 13,
    title: "PORTU перегородка для душу",
    src: "/partitions/partition.jpg",
    alt: "Picture of the author",
    description: "Enhances modal presentations.",
  },
];
