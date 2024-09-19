import Image from 'next/image';
import { HTMLAttributes } from 'react';
import { Button } from '../ui/button';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const OptBtn = ({ icon, ...props }: Props) => {
  return (
    <Button
      variant="ghost"
      className="size-11 !scale-100"
      {...props}
    >
      <Image
        src={`/assets/icons/${icon}.svg`}
        width={32}
        height={32}
        alt={icon}
      />
    </Button>
  );
};

export default OptBtn;
