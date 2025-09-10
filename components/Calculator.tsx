"use client";
import { useEffect, useState } from "react";
import { AnimatedNumber } from "@/components/motion-primitives/animated-number";
import { Input } from "./ui/input";
import { Switch } from "./ui/switch";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export const Calculator = ({}) => {
  const [value, setValue] = useState(0);
  console.log("----", (1234567.89).toLocaleString("uk-UA"));
  // choice
  useEffect(() => {
    const number = 1234567.89;
    const formatted = new Intl.NumberFormat("uk-UA").format(number);
    // setValue(formatted);
    setValue(2088);
  }, []);
  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-800  ">
      <p className="text-2xl mb-6 ">
        Цiна кабiни
        <AnimatedNumber
          className="inline-flex items-center font-mono text-2xl font-semibold text-zinc-800 dark:text-zinc-50 mx-2"
          springOptions={{
            bounce: 0,
            duration: 2000,
          }}
          value={value}
        />
        <span>грв.</span>
      </p>
      <label htmlFor="" className="flex  justify-center items-center">
        <p>высота общая:</p>
        <Input type="number" placeholder="1000" className="m-2" />
        мм.
      </label>
      <label htmlFor="" className="flex  justify-center items-center">
        <p>ширина общая:</p>
        <Input type="number" placeholder="200" className="m-2" />
        мм.
      </label>
      <label htmlFor="" className="flex  justify-center items-center">
        <p>ширина рабочего проема:</p>
        <Input type="number" placeholder="Type here..." className="m-2" />
        мм.
      </label>
      <label htmlFor="" className="flex  justify-center items-center">
        <p>ширина глухой части:</p>
        <Input type="number" placeholder="Type here..." className="m-2" />
        мм.
      </label>
      {/* <Input type="number" placeholder="Type here..." className="m-2" /> */}
      {/* cabine */}
      <hr />
      {/* <label htmlFor="" className="flex  justify-center items-center">
        <Switch />
      </label> */}
      <label htmlFor="" className="flex  justify-center items-center">
        <p>Выбор типа стекла: </p>
        <Select>
          <SelectTrigger className="w-[300px]">
            <SelectValue placeholder="тип стекла ..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="trasparent">прозрачное</SelectItem>
            <SelectItem value="diamond">диаманд</SelectItem>
            <SelectItem value="bronze">бронза</SelectItem>
            <SelectItem value="graphite">графит</SelectItem>
          </SelectContent>
        </Select>
      </label>
    </div>
  );
};
