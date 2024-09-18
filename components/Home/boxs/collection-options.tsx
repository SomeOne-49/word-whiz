import Image from 'next/image';
import { Button } from '../../ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '../../ui/popover';
import DeleteCollection from './delete-collection';
import EditCollection from './edite-collection';

const CollectionOptions = () => {
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
          <DeleteCollection />
          <EditCollection />
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default CollectionOptions;
