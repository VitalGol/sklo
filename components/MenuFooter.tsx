'use client';
import {
  Activity,
  Component,
  HomeIcon,
  Mail,
  Package,
  ScrollText,
  SunMoon,
} from 'lucide-react';

import {
  Dock,
  DockIcon,
  DockItem,
  DockLabel,
} from '@/components/motion-primitives/dock';
import { useTheme } from 'next-themes';
import { useRouter } from 'next/navigation';

const data = [
  {
    title: 'О нас',
    icon: (
      <HomeIcon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/',
  },
  {
    title: 'Cabine',
    icon: (
      <Package className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/cabine',
  },
  {
    title: 'Fence',
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/fence',
  },
  {
    title: 'Canopy',
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/canopy',
  },
  {
    title: 'Partition',
    icon: (
      <Component className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/partition',
  },
  // {
  //   title: 'Activity',
  //   icon: (
  //     <Activity className="h-full w-full text-neutral-600 dark:text-neutral-300" />
  //   ),
  //   href: '#',
  // },
  // {
  //   title: 'Change Log',
  //   icon: (
  //     <ScrollText className="h-full w-full text-neutral-600 dark:text-neutral-300" />
  //   ),
  //   href: '#',
  // },
  {
    title: 'Email',
    icon: (
      <Mail className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '/1',
  },
  {
    title: 'Theme',
    icon: (
      <SunMoon className="h-full w-full text-neutral-600 dark:text-neutral-300" />
    ),
    href: '#',
  },
];

export function MenuFooter() {
  const router = useRouter();
  const { setTheme } = useTheme();
  const goToItem = (href: string) => {
    if (href === '#') {
      const themeMode = localStorage.getItem('theme');
      if (themeMode === 'dark') {
        setTheme('light');
      }
      if (themeMode === 'light') {
        setTheme('dark');
      }
    } else {
      router.push(href);
    }
  };
  return (
    // <div className="flex item-end  mt-10 mb-16  border-2 border-green-800">
    <div className="absolute bottom-2 left-1/2 max-w-full -translate-x-1/2 border-2 border-red-800">
      <Dock className="items-end pb-3">
        {data.map((item, idx) => (
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
    // </div>
  );
}
