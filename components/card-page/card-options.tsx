'use client';
import { toggleMarkedCard } from '@/lib/actions/card.action';
import { useClickOutside } from '@/lib/hooks/useClickOutside';
import { speakText } from '@/lib/utils';
import { usePathname } from 'next/navigation';
import { useState } from 'react';
import CopyText from '../shared/copy-text';
import EditCard from './edit-card';
import OptBtn from './opt-btn';
type Props = {
  isFront: boolean;
  showImg: boolean;
  toggleImg: (value: boolean) => void;
  isMarked: boolean;
  card: {
    front: string;
    back: string;
    color: string;
    cardId: string;
    note: string;
    collection: string;
  };
};
const CardOptions = ({
  isFront,
  showImg,
  toggleImg,
  isMarked,
  card: { front, back, color, cardId, note, collection },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useClickOutside(() => setIsOpen(false));
  const [isSaved, setisSaved] = useState(isMarked);
  const path = usePathname();

  const toggleMark = async () => {
    const card = await toggleMarkedCard(cardId, path);
    if (!card) return false;
    const parsedCard = JSON.parse(card);
    setisSaved(parsedCard.isMarked);
  };

  return (
    <div
      ref={optionRef}
      className={`absolute bottom-3 right-3 flex h-14 flex-row-reverse items-center gap-1 overflow-hidden rounded-2xl bg-white px-1.5 shadow-md transition-all duration-500 ${!isFront ? 'opacity-0' : 'opacity-100'} ${isOpen ? 'max-w-80' : 'max-w-14'} transition-all duration-500`}
    >
      {isOpen && <OptBtn icon="close" />}
      {!isOpen && <OptBtn icon="dots" onClick={() => setIsOpen(!isOpen)} />}
      <EditCard
        front={front}
        back={back}
        color={color}
        cardId={cardId}
        note={note}
        collection={collection}
        isOpen={isOpen}
      />
      <OptBtn icon="volume" onClick={() => speakText(front)} />
      {/* {!showImg ? (
        <OptBtn icon="gallery" onClick={() => toggleImg(true)} />
      ) : (
        <OptBtn icon="word" onClick={() => toggleImg(false)} />
      )} */}
      {isSaved ? (
        <OptBtn icon="bookmark-delete" onClick={toggleMark} />
      ) : (
        <OptBtn icon="bookmark-save" onClick={toggleMark} />
      )}
      {/* <OptBtn icon="trash" /> */}
      <CopyText ele="h4" />
    </div>
  );
};

export default CardOptions;
