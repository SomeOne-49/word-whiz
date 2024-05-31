import { Input } from '@nextui-org/input';
import Image from 'next/image';
type Props = {
  type: string;
  placeholder: string;
  icon: string;
};
const UInput = ({ type, placeholder, icon }: Props) => {
  return (
    <Input
      type={type}
      classNames={{
        // mainWrapper: 'h-12',
        inputWrapper: [
          'bg-primary-light h-12',
          'group-data-[hover=true]:bg-primary-dark',
          'group-data-[focus=true]:bg-primary-light',
        ],
        input: ['text-lg','!ps-3', '!text-primary', 'placeholder:text-primary'],
      }}
      placeholder={placeholder}
      startContent={<Image src={`/assets/icons/${icon}.svg`} alt={icon} width={22} height={22} />}
    />
  );
};

export default UInput;
