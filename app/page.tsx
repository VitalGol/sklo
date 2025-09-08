// import Image from 'next/image';
import { TextEffect } from '@/components/motion-primitives/text-effect';

export default function Home() {
  return (
    <div className="w-full flex flex-col items-center justify-start  mx-4 mx-auto font-sans text-center border-2 border-red-800">
      <h1>125</h1>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        explicabo laborum repudiandae dolore eius? Dolores magni a fugit quod
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maiores
        explicabo laborum repudiandae dolore eius? Dolores magni a fugit quod
        ex!
      </p>
      <TextEffect per="char" preset="fade">
        Animate your ideas with motion-primitives
      </TextEffect>
    </div>
  );
}
