import Image from 'next/image';
import { Button } from '../ui/button';
type Props = {
  isFront: boolean;
  toggleFront: () => void;
};
const CardAction = ({ isFront, toggleFront }: Props) => {
  return (
    <div className="fixed -bottom-11 left-1/2 flex h-fit -translate-x-1/2 items-center justify-center gap-10">
      <Button variant="secondary" className="size-20 rounded-2xl shadow-md">
        <Image
          src="/assets/icons/thumb-up.svg"
          width={40}
          height={40}
          alt="thumb-up"
        />
      </Button>
      <Button
        className="size-24 rotate-45 rounded-2xl bg-primary-light shadow-md hover:bg-primary-dark"
        onClick={toggleFront}
      >
        {isFront ? (
          <Image
            src="/assets/icons/eye-open.svg"
            width={60}
            height={60}
            alt="thumb-up"
            className="-rotate-45"
          />
        ) : (
          <Image
            src="/assets/icons/eye-close.svg"
            width={60}
            height={60}
            alt="thumb-up"
            className="-rotate-45"
          />
        )}
      </Button>
      <Button variant="secondary" className="size-20 rounded-2xl shadow-md">
        <Image
          src="/assets/icons/thumb-down.svg"
          width={40}
          height={40}
          alt="thumb-down"
        />
      </Button>
    </div>
  );
};

export default CardAction;
