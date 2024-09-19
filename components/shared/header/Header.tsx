import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { ProfileOptions } from '@/constants';
import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header className="relative z-50 flex items-center justify-between rounded-2xl bg-primary p-2">
      <Link href="/">
        <Image src="/assets/logo.svg" height={26} width={135} alt="Logo" />
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" arrowPadding={30}>
          {ProfileOptions.map((option) => {
            return (
              <Link href={option.link} key={option.link}>
                <DropdownMenuItem>{option.name}</DropdownMenuItem>
              </Link>
            );
          })}
        </DropdownMenuContent>
      </DropdownMenu>
    </header>
  );
};

export default Header;
