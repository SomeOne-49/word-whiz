import { colors } from '@/constants';
import Image from 'next/image';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '../accordion';
import { ToggleGroup, ToggleGroupItem } from '../toggle-group';

const ColorPicker = ({ title }: { title: string }) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex h-10 items-center gap-2 rounded-xl bg-primary-light py-3 pl-3 text-sm text-primary">
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
        <AccordionContent className="mt-1 rounded-xl bg-primary-light p-3">
          <ToggleGroup type="single" variant="outline">
            <div className="grid w-full grid-cols-5 gap-3">
              {colors.map((colorVal) => (
                <ToggleGroupItem
                  key={colorVal}
                  className="h-9 rounded-xl"
                  value={colorVal}
                  style={{ backgroundColor: colorVal }}
                />
              ))}
            </div>
          </ToggleGroup>
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorPicker;
