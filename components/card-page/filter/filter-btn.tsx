import { Button } from '@/components/ui/button';
import Image from 'next/image';

const FilterBtn = ({ icon, title }: { icon: string, title: string }) => {
  return (
    <div className="flex flex-col items-center justify-center gap-1 text-center">
      <Button variant={'light'} className="group relative size-14">
        <Image
          src={`/assets/icons/${icon}.svg`}
          width={28}
          className="group-hover:hidden"
          height={28}
          alt={icon}
        />
        <Image
          src={`/assets/icons/${icon}-white.svg`}
          width={28}
          className="hidden group-hover:block"
          height={28}
          alt={icon}
        />
      </Button>
      <h6 className="text-sm text-primary">{title}</h6>
    </div>
  );
};

export default FilterBtn;
