// import { CardsFilter } from "@/constants";
import Image from 'next/image';
import { Button } from '../ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '../ui/dropdown-menu';

const HomeSort = () => {
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
        <DropdownMenuItem>Filter</DropdownMenuItem>

        {/* {CardsFilter.map((filter) => {
          return (
            <DropdownMenuItem key={filter.name}>{filter.name}</DropdownMenuItem>
          );
        })} */}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default HomeSort;
