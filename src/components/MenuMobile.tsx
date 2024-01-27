// import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Cards from "./Cards";
import { Card } from "@/pages/Landing";
import { button } from "@nextui-org/react";

// type Props = {};

// const acc = [
//   {
//     title: "All Tools",
//     content: <Cards />,
//   },
//   {
//     title: "In Demand Tools",
//     content: <Cards />,
//   },
//   {
//     title: "Social Media Tools",
//     content: <Cards />,
//   },
// ];

interface MenuProps {
  buttons: String[];
  selectedButton: String;
  setSelectedButton: Function;
  cards: Card[];
}

const MenuMobile = ({buttons,selectedButton,setSelectedButton,cards}:MenuProps) => {
  return (
    <div className="my-14 z-40">
      <Accordion
        type="single"
        collapsible
        className="w-full flex flex-col gap-2"
      >
        {buttons.map((ac, id) => (
          <AccordionItem value="item-1" key={id}>
            <AccordionTrigger className="dark:text-white dark:border dark:border-gray-700 py-4 z-40 items-center rounded-md shadow-md px-5 font-outfit">
              {ac}
            </AccordionTrigger>
            <AccordionContent>
              <Cards cards={cards}/>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default MenuMobile;
