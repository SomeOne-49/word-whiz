import CollectionBox from "@/components/Home/collection-box";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import Image from "next/image";

const Home = () => {
  return (
    <div className="flex max-h-full flex-col gap-3.5 ">
      <div className="flex items-center justify-between gap-4">
        <h1 className="text-2xl font-semibold text-white">My Collections</h1>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant={'ghost'} className="px-2">
              <Image src="/assets/icons/sort.svg" width={24} height={24} alt="sort" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align='end' arrowPadding={30}>
            <DropdownMenuItem>Name</DropdownMenuItem>
            <DropdownMenuItem>Oldest</DropdownMenuItem>
            <DropdownMenuItem>Newest</DropdownMenuItem>
            <DropdownMenuItem>Items</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <div className="hide_scroll flex flex-col gap-3 overflow-auto px-1">
        <CollectionBox />
        <CollectionBox />
      </div>
    </div>
  )
}

export default Home;