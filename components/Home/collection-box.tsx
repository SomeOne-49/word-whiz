import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';

const CollectionBox = ({ colored }: { colored?: boolean }) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99] ${colored ? 'bg-primary-light' : 'bg-white'}`}
    >
      <Link href="/collection/1" className="flex grow items-center gap-4">
        <div
          className={`center_ele size-12 rounded-full text-3xl ${colored ? 'bg-white' : 'bg-primary-light'}`}
        >
          <div className="h-7">🇬🇪</div>
        </div>
        <div className="flex grow flex-col gap-0.5">
          <h5 className="text-lg font-semibold text-primary">
            Collection name
          </h5>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
            <p className="flex items-center gap-1">
              <Image
                src="/assets/icons/cards-dark.svg"
                width={18}
                height={18}
                alt="cards"
              />
              <span>12</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src="/assets/icons/calendar-dark.svg"
                width={18}
                height={18}
                alt="calendar"
              />
              <span>12-04-1823</span>
            </p>
          </div>
        </div>
      </Link>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'ghost'} className="px-2">
            <Image
              src="/assets/icons/dots.svg"
              width={18}
              height={18}
              className="rotate-90"
              alt="dots"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent align='end'>
          <div className="flex items-center gap-2">
            <Button variant={'ghost'}>
              <Image
                src="/assets/icons/trash.svg"
                width={20}
                height={20}
                alt="trash"
              />
            </Button>
            <Button variant={'ghost'}>
              <Image
                src="/assets/icons/edit.svg"
                width={20}
                height={20}
                alt="edit"
              />
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default CollectionBox;
