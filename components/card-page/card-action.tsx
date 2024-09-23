import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';
type Props = {
  cards: string;
  current: string;
  isFront: boolean;
  toggleFront: () => void;
  collection: string;
};
const CardAction = ({
  cards,
  current,
  isFront,
  toggleFront,
  collection,
}: Props) => {
  const cardsArr = JSON.parse(cards);

  const currentIndex = cardsArr.indexOf(current);

  const next =
    currentIndex + 1 >= cardsArr.length ? currentIndex : currentIndex + 1;

  const prev = currentIndex - 1 < 0 ? currentIndex : currentIndex - 1;

  return (
    <div className="fixed -bottom-11 left-1/2 flex h-fit -translate-x-1/2 items-center justify-center gap-10">
      <Link href={`/collections/${collection}/${cardsArr[prev]}`}>
        <Button
          variant="secondary"
          className="size-20 rounded-2xl shadow-md"
          disabled={currentIndex === 0}
        >
          <Image
            src="/assets/icons/prev.svg"
            width={40}
            height={40}
            alt="prev"
          />
        </Button>
      </Link>
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
      <Link href={`/collections/${collection}/${cardsArr[next]}`}>
        <Button
          variant="secondary"
          className="size-20 rounded-2xl shadow-md"
          disabled={currentIndex === cardsArr.length - 1}
        >
          <Image
            src="/assets/icons/next.svg"
            width={40}
            height={40}
            alt="next"
          />
        </Button>
      </Link>
    </div>
  );
};

export default CardAction;
