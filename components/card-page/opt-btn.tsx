import Image from 'next/image';
import React, { forwardRef, HTMLAttributes } from 'react';
import { Button } from '../ui/button';

interface Props extends HTMLAttributes<HTMLButtonElement> {
  icon: string;
}

const OptBtn = forwardRef<HTMLButtonElement, Props>(({ icon, ...props }, ref) => {
  return (
    <Button
      variant="ghost"
      className="size-11 !scale-100"
      ref={ref}
      {...props}
    >
      <Image
        src={`/assets/icons/${icon}.svg`}
        width={30}
        height={30}
        alt={icon}
      />
    </Button>
  );
});

OptBtn.displayName = 'OptBtn'; // لإصلاح تحذير React عند استخدام forwardRef

export default OptBtn;
