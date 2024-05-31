import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';

const colors = [
  '#E4FE7D',
  '#FF6869',
  '#7DFF82',
  '#7BFFF7',
  '#DC77FF',
  '#000000',
  '#F00001',
  '#25B802',
  '#A00001',
  '#003498',
];

const ColorPicker = ({ title }: { title: string }) => {
  const itemClasses = {
    base: 'py-10 w-full',
    title: 'font-normal text-medium',
    trigger: 'py-2.5 px-3',
    content: 'bg-primary-light rounded-xl py-1.5 px-3 mt-1',
  };

  return (
    <Accordion
      showDivider={true}
      defaultExpandedKeys={['1']}
      className="p-0"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="Colors"
        classNames={{
          base: 'px-0',
          heading: 'bg-primary-light rounded-xl hover:bg-primary-dark',
          title: '!text-primary',
        }}
        title={title}
        startContent={
          <Image
            src={`/assets/icons/color.svg`}
            alt="color"
            width={22}
            height={22}
          />
        }
      >
        <div className="grid gap-2.5 grid-cols-5 py-2">
          {colors.map((color) => (
            <button
              key={color}
              style={{ backgroundColor: color }}
              className="rounded-xl w-full shadow-md h-11"
            />
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default ColorPicker;
