'use client';

import { Avatar } from '@nextui-org/avatar';
import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
} from '@nextui-org/dropdown';

const AvatarDropdown = () => {
  return (
    <Dropdown placement="bottom-end" className='min-w-36 bg-white text-primary'>
      <DropdownTrigger>
        <Avatar
          // isBordered
          as="button"
          size="md"
          className="transition-transform"
          src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
        />
      </DropdownTrigger>
      <DropdownMenu color='primary' className='bg-white'>
        <DropdownItem key="new">Profile</DropdownItem>
        <DropdownItem key="copy">Settings</DropdownItem>
        <DropdownItem key="delete" className="text-danger" color="danger">
          Sign out
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};

export default AvatarDropdown;
