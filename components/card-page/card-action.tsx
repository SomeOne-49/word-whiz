import Image from 'next/image';
import { Button } from '../ui/button';
type Props = {
  cardLength: number;
  current: number;
  isFront: boolean;
  toggleFront: (val: boolean) => void;
  changeCurrent: (val: number) => void;
};
const CardAction = ({
  cardLength,
  current,
  isFront,
  toggleFront,
  changeCurrent,
}: Props) => {

  const next = current + 1 >= cardLength ? current : current + 1;

  const prev = current - 1 < 0 ? current : current - 1;
  
  return (
    <div className="fixed -bottom-11 left-1/2 flex h-fit -translate-x-1/2 items-center justify-center gap-10">
      <Button
        variant="secondary"
        className="size-20 rounded-2xl shadow-md"
        onClick={() => {
          changeCurrent(prev);
          toggleFront(true);
        }}
        disabled={current <= 0}
      >
        <Image src="/assets/icons/prev.svg" width={40} height={40} alt="prev" />
      </Button>
      <Button
        className="size-24 rotate-45 rounded-2xl bg-primary-light shadow-md hover:bg-primary-dark"
        onClick={() => toggleFront(!isFront)}
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
      <Button
        variant="secondary"
        className="size-20 rounded-2xl shadow-md"
        onClick={() => {
          changeCurrent(next);
          toggleFront(true);
        }}
        disabled={current >= cardLength - 1}
      >
        <Image src="/assets/icons/next.svg" width={40} height={40} alt="next" />
      </Button>
    </div>
  );
};

export default CardAction;
