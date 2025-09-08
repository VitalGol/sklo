import React from 'react';
import { Input } from './ui/input';
import { Switch } from './ui/switch';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';

export const Calculator = ({}) => {
  // choice
  return (
    <div className="flex flex-col justify-center items-center border-2 border-blue-800 p-4 m-4">
      <h1>Calculator</h1>
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
