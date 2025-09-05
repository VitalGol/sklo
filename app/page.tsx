// import Image from 'next/image';

import { ModeToggle } from '@/components/ModeToggle';

export default function Home() {
  return (
    <div className="font-sans flex flex-col items-center justify-start min-h-screen p-8 pb-20  sm:p-20">
      <h1>125</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        explicabo laborum repudiandae dolore eius? Dolores magni a fugit quod
        ex!
      </p>
      <ModeToggle />
    </div>
  );
}
