'use client';
import { CardsFilter } from '@/constants';
import { formUrlQuery } from '@/lib/utils';
import Image from 'next/image';
import { useRouter, useSearchParams } from 'next/navigation';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';
const SortBtn = () => {
  const searchParams = useSearchParams();
  const route = useRouter();
  const handleChange = (val: string) => {
    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: 'f',
      value: val,
    });
    route.push(newUrl, { scroll: false });
  };
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="px-2">
          <Image
            src="/assets/icons/sort-colord.svg"
            width={24}
            height={24}
            alt="sort"
          />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" arrowPadding={30}>
        {CardsFilter.map((filter) => {
          return (
            <DropdownMenuItem
              key={filter.value}
              onClick={() => handleChange(filter.value)}
            >
              {filter.name}
            </DropdownMenuItem>
          );
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortBtn;
