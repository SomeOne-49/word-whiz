import * as Clerk from '@clerk/elements/common';
import Image from 'next/image';

const CInput = ({
  icon,
  placeholder,
}: {
  icon?: string;
  placeholder: string;
}) => {
  return (
    <div className="flex h-12 items-center gap-2 rounded-xl border border-primary-dark bg-primary-light p-3 text-sm text-primary">
      {icon && (
        <Image
          src={`/assets/icons/${icon}.svg`}
          width={20}
          height={20}
          alt={icon}
        />
      )}
      <Clerk.Input
      required
        placeholder={placeholder}
        className="w-full bg-transparent  text-base placeholder:text-primary focus-visible:outline-none disabled:cursor-not-allowed disabled:opacity-50"
      />
    </div>
  );
};

export default CInput;
