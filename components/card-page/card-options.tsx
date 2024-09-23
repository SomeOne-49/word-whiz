'use client';
import { ICard } from '@/database/card.model';
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
  card: { front, back, color, cardId, note, collection },
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useClickOutside(() => setIsOpen(false));
  const [updatedCard, setUpdatedCard] = useState<ICard | null>(null);
  const path = usePathname();

  const toggleMark = async () => {
    const card = await toggleMarkedCard(cardId, path);
    if (!card) return false;
    const parsedCard = JSON.parse(card);
    setUpdatedCard(parsedCard);
  };

  return (
    <div
      ref={optionRef}
      className={`absolute bottom-3 right-3 flex flex-col-reverse items-center gap-1 overflow-hidden rounded-2xl bg-white p-1.5 shadow-md transition-all duration-500 ${!isFront ? 'opacity-0' : 'opacity-100'} ${isOpen ? 'max-h-80' : 'max-h-14'} transition-all duration-500`}
    >
      {isOpen && <OptBtn icon="close" />}
      {!isOpen && <OptBtn icon="dots" onClick={() => setIsOpen(!isOpen)} />}
      <OptBtn icon="volume" onClick={() => speakText(front)} />
      {!showImg ? (
        <OptBtn icon="gallery" onClick={() => toggleImg(true)} />
      ) : (
        <OptBtn icon="word" onClick={() => toggleImg(false)} />
      )}
      {updatedCard?.isMarked ? (
        <OptBtn icon="bookmark-delete" onClick={toggleMark} />
      ) : (
        <OptBtn icon="bookmark-save" onClick={toggleMark} />
      )}
      <EditCard front={front} back={back} color={color} cardId={cardId} note={note} collection={collection} />
      {/* <OptBtn icon="trash" /> */}
      <CopyText ele="h4" />
    </div>
  );
};

export default CardOptions;
