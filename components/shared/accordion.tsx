import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Image from 'next/image';
import React from 'react';

type Props = {
  icon: string;
  title: string;
  children: React.ReactNode;
};

const FormAccordion = ({ icon, title, children }: Props) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem value="item-1">
        <AccordionTrigger className="flex h-10 items-center gap-2 rounded-xl bg-primary-light py-3 pl-3 text-sm text-primary">
          <div className="flex items-center gap-2">
            <Image
              src={`/assets/icons/${icon}.svg`}
              width={20}
              height={20}
              alt="folder"
            />
            <p className="text-base">{title}</p>
          </div>
        </AccordionTrigger>
        <AccordionContent className="mt-1 rounded-xl bg-primary-light p-3">
          {children}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FormAccordion;
