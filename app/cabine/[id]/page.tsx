"use client";
import { Calculator } from "@/components/Calculator";
import { Button } from "@/components/ui/button";
import { cabine } from "@/data/data";
import Image from "next/image";

interface PageProps {
  params: {
    id: number;
    src: string;
    alt: string;
    title: string;
    description: string;
  };
}

const page = async ({ params }: PageProps) => {
  const { id } = await params;
  const { src, alt, title, description } = cabine[id];

  return (
    <div className="flex justify-center items-center">
      <div className="flex flex-col justify-center items-center space-y-4 p-10">
        <p className="text-2xl ">
          Кабiна <span className="text-2xl font-semibold">{title}</span>
        </p>

        <Image
          src={src}
          alt={alt}
          width={500}
          height={600}
          className="flex justify-center items-center"
        />
        <p>{description}</p>
      </div>
      <div className="flex flex-col">
        <Calculator />
        <Button
          className="mt-6 bg-blue-500 text-white hover:bg-blue-400"
          onClick={() => window.history.back()}
        >
          повернутися до вибору душової кабіни
        </Button>
      </div>
    </div>
  );
};

export default page;
