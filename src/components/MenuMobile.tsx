import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cards from "./Cards";

type Props = {};

const acc =[
  {
    title: "All Tools",
    content: <Cards />
  },
  {
    title: "In Demand Tools",
    content: <Cards />
  },
  {
    title: "Social Media Tools",
    content: <Cards />
  },
]


const MenuMobile = (props: Props) => {
  return (
    <div className="my-14 z-40">
      <Accordion type="single" collapsible className="w-full flex flex-col gap-2">
        {acc.map(ac=>(<AccordionItem value="item-1">
          <AccordionTrigger className="dark:text-white dark:border dark:border-gray-700 py-4 z-40 items-center rounded-md shadow-md px-5 font-outfit">
            {ac.title}
          </AccordionTrigger>
          <AccordionContent>
            {ac.content}
          </AccordionContent>
        </AccordionItem>))}
       
      </Accordion>
    </div>
  )
};

export default MenuMobile;
