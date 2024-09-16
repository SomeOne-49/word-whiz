import * as React from 'react';

import { cn } from '@/lib/utils';
import Image from 'next/image';

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, icon, ...props }, ref) => {
    return (
      <div
        className={cn(
          'flex h-10 gap-2 items-center rounded-xl bg-primary-dark text-primary text-sm p-3',
          className
        )}
      >
        {icon && <Image src={`/assets/icons/${icon}.svg`} width={20} height={20} alt={icon} />}
        <input
          type={type}
          className={cn(
            'w-full bg-transparent  placeholder:text-primary text-base focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50',
            className
          )}
          ref={ref}
          {...props}
        />
      </div>
    );
  }
);
Input.displayName = 'Input';

export { Input };
