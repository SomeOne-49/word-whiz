'use client';
import { Button } from '@nextui-org/button';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';
import Image from 'next/image';

const SortDropdown = () => {
  return (
    <Dropdown placement="bottom-end" className="min-w-36 bg-white text-primary">
      <DropdownTrigger>
        <Button className="h-auto min-w-fit bg-white p-2.5" variant='light'>
          <Image
            src="/assets/icons/sort-dark.svg"
            alt="sort"
            width={24}
            height={24}
          />
        </Button>
      </DropdownTrigger>
      <DropdownMenu color="primary" className="bg-white">
        <DropdownItem key="name">Name</DropdownItem>
        <DropdownItem key="item">Item</DropdownItem>
        <DropdownItem key="oldest">Oldest</DropdownItem>
        <DropdownItem key="recent">Most recent</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default SortDropdown;
