import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover';
import Box from './box';
import DeleteCollection from './delete-collection';
import EditCollection from './edite-collection';

const CollectionBox = ({ colored }: { colored?: boolean }) => {
  return (
    <Box colored>
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
              <span>12-04-2023</span>
            </p>
          </div>

        </div>

      </Link>
      <Popover>
        <PopoverTrigger asChild>
          <Button variant={'ghost'} className="h-9 px-2">
            <Image
              src="/assets/icons/dots.svg"
              width={18}
              height={18}
              className="rotate-90"
              alt="dots"
            />
          </Button>
        </PopoverTrigger>
        <PopoverContent align="end">
          <div className="flex items-center gap-2">
            <DeleteCollection/>
            <EditCollection/>
          </div>
        </PopoverContent>
      </Popover>
    </Box>
  );
};

export default CollectionBox;
