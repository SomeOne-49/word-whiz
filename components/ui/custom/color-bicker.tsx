import Image from "next/image";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "../accordion";
import { ToggleGroup, ToggleGroupItem } from "../toggle-group";

const ColorPicker = ({title} : {title: string}) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex h-10 items-center gap-2 rounded-xl bg-primary-dark py-3 pl-3 text-sm text-primary">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/color.svg"
              width={20}
              height={20}
              alt="color"
            />
            <p className="text-base">{title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-1 rounded-xl bg-primary-dark p-3">
          <ToggleGroup type="single" variant="outline">
            <div className="grid w-full grid-cols-5 gap-3">
              <ToggleGroupItem
                className="h-9 rounded-xl bg-red-500"
                value="a"
              />

              <ToggleGroupItem
                value="b"
                className="h-9 rounded-xl bg-blue-500"
              />

              <ToggleGroupItem
                value="c"
                className="h-9 rounded-xl bg-green-400"
              />
              <ToggleGroupItem
                value="d"
                className="h-9 rounded-xl bg-gray-500"
              />

              <ToggleGroupItem
                value="e"
                className="h-9 rounded-xl bg-yellow-300"
              />
              <ToggleGroupItem
                value="f"
                className="h-9 rounded-xl bg-indigo-500"
              />

              <ToggleGroupItem
                value="s"
                className="h-9 rounded-xl bg-sky-700"
              />

              <ToggleGroupItem
                value="cc"
                className="h-9 rounded-xl bg-amber-700"
              />
              <ToggleGroupItem
                value="r"
                className="h-9 rounded-xl bg-slate-500"
              />

              <ToggleGroupItem
                value="ea"
                className="h-9 rounded-xl bg-pink-300"
              />
            </div>
          </ToggleGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorPicker;
