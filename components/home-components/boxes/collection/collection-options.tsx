import { Button } from '@/components/ui/button';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import Image from 'next/image';
import DeleteCollection from './options/delete';
import EditCollection from './options/edit';

const CollectionOptions = ({
  id,
  collection,
}: {
  id: string;
  collection: string;
}) => {
  return (
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
          <DeleteCollection id={id} />
          <EditCollection collection={collection} />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CollectionOptions;
