'use client';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from '@/components/ui/command';

import { Button } from '@/components/ui/button';
import ColorPicker from '@/components/ui/custom/color-bicker';
import { Input } from '@/components/ui/input';
import { SheetFooter } from '@/components/ui/sheet';
import Image from 'next/image';
import { useState } from 'react';

const CardForm = () => {
  const [uploadedImg, setUploadedImg] = useState<string | ''>('');

  // eslint-disable-next-line no-undef
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]; 
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUploadedImg(imageUrl);
    }
  };

  return (
    <>
      <div className="my-2 flex flex-col gap-2">
        <Input icon="front" placeholder="Card Front" />
        <Input icon="back" placeholder="Card Back" />
        <Input icon="note" placeholder="Notes" />
        <Accordion type="single" collapsible>
          <AccordionItem value="item-1">
            <AccordionTrigger className="flex h-10 items-center gap-2 rounded-xl bg-primary-dark py-3 pl-3 text-sm text-primary">
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/folder.svg"
                  width={20}
                  height={20}
                  alt="folder"
                />
                <p className="text-base">Card Collection</p>
              </div>
            </AccordionTrigger>
            <AccordionContent className="mt-1 rounded-xl bg-primary-dark p-3">
              <Command className="bg-transparent">
                <CommandInput
                  className="h-8 py-1 placeholder:text-primary"
                  placeholder="Search for collection..."
                />
                <CommandList>
                  <CommandEmpty>No Matches Found.</CommandEmpty>
                  <CommandGroup className="hide_scroll max-h-36 overflow-auto">
                    <CommandItem>🇸🇦 Collection name</CommandItem>
                    <CommandItem>🇸🇦 Collection</CommandItem>
                    <CommandItem>🇸🇦 Collection Name</CommandItem>
                    <CommandItem>🇸🇦 Collection 1</CommandItem>
                    <CommandItem>🇸🇦 Collection 3</CommandItem>
                    <CommandItem>🇸🇦 Collection 2</CommandItem>
                  </CommandGroup>
                </CommandList>
              </Command>
            </AccordionContent>
          </AccordionItem>
        </Accordion>
        <ColorPicker title="Cadr Color" />
        <div className="flex items-center justify-between rounded-xl bg-primary-dark px-3 py-1.5">
          <div className="flex items-center gap-2">
            <Image
              src="/assets/icons/gallery.svg"
              width={18}
              height={18}
              alt="image"
            />
            <p className="text-primary">Card Image</p>
          </div>
          <label
            htmlFor="uploadImg"
            className="center_ele relative size-11 cursor-pointer overflow-hidden rounded-xl bg-primary"
          >
            <Image
              src="/assets/icons/upload-img.svg"
              width={22}
              height={22}
              alt="Upload Image"
            />
            {uploadedImg && <Image src={uploadedImg} fill alt="Uploaded Image" />}
          </label>
          <input
            type="file"
            onChange={handleImageUpload}
            className="hidden"
            accept='image/*'
            id="uploadImg"
          />
        </div>
      </div>
      <SheetFooter>
        <Button className="grow">Create Card</Button>
      </SheetFooter>
    </>
  );
};

export default CardForm;
