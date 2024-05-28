import { Button } from '@nextui-org/button';
import { Popover, PopoverContent, PopoverTrigger } from '@nextui-org/popover';
import Image from 'next/image';
import Link from 'next/link';

const CollectionCard = () => {
  return (
    <div className="flex items-center gap-3 rounded-xl bg-white p-3 shadow-sm shadow-primary-light ">
      <Link href='/collection' className="relative size-12 shrink-0 rounded-full bg-primary-light text-center">
        <span className="absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2 text-3xl">
          🇸🇦
        </span>
      </Link>
      <Link href='/collection' className="flex grow flex-col gap-1">
        <h3 className="text-xl font-semibold text-primary">Collection Name</h3>
        <div className="flex items-center justify-between gap-3">
          <p className="flex items-center gap-1.5 text-gray-500">
            <Image
              src="/assets/icons/cards-dark.svg"
              alt="clip"
              width={18}
              height={18}
            />
            <span>12</span>
          </p>
          <p className="flex items-center gap-1.5 text-gray-500">
            <Image
              src="/assets/icons/calendar-dark.svg"
              alt="clip"
              width={18}
              height={18}
            />
            <span>12-05-2024</span>
          </p>
        </div>
      </Link>
      <div>
        <Popover placement="bottom-end" showArrow={true} color="foreground">
          <PopoverTrigger>
            <Button className="min-w-fit p-2" variant="light" color="primary">
              <Image
                src="/assets/icons/dots.svg"
                alt="dots"
                width={20}
                height={20}
                className="rotate-90"
              />
            </Button>
          </PopoverTrigger>
          <PopoverContent>
            <div>
              <Button className="min-w-fit p-2" variant="light" color="primary">
                <Image
                  src="/assets/icons/edit.svg"
                  alt="dots"
                  width={20}
                  height={20}
                />
              </Button>
              <Button className="min-w-fit p-2" variant="light" color="danger">
                <Image
                  src="/assets/icons/trash.svg"
                  alt="dots"
                  width={20}
                  height={20}
                />
              </Button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default CollectionCard;
