'use client';
import { useClickOutside } from '@/lib/hooks/useClickOutside';
import { speakText } from '@/lib/utils';
import { useState } from 'react';
import CopyText from '../shared/copy-text';
import EditCard from './edit-card';
import OptBtn from './opt-btn';
type Props = {
  isFront: boolean;
  showImg: boolean;
  isSaved: boolean;
  toggleImg: (value: boolean) => void;
  toggleSave: (value: boolean) => void;
  front: string;
};
const CardOptions = ({
  isFront,
  showImg,
  isSaved,
  toggleImg,
  toggleSave,
  front,
}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const optionRef = useClickOutside(() => setIsOpen(false));
  return (
    <div
      ref={optionRef}
      className={`absolute bottom-3 right-3 flex flex-col-reverse items-center gap-1 overflow-hidden rounded-2xl bg-white p-1.5 shadow-md transition-all duration-500 ${!isFront ? 'opacity-0' : 'opacity-100'} ${isOpen ? 'max-h-80' : 'max-h-14'} transition-all duration-500`}
    >
      {isOpen && <OptBtn icon="close" />}
      {!isOpen && <OptBtn icon="dots" onClick={() => setIsOpen(!isOpen)} />}
      <OptBtn icon="volume" onClick={()=>speakText(front, 'ar-SA')} />
      {!showImg ? (
        <OptBtn icon="gallery" onClick={() => toggleImg(true)} />
      ) : (
        <OptBtn icon="word" onClick={() => toggleImg(false)} />
      )}
      {isSaved ? (
        <OptBtn icon="bookmark-delete" onClick={() => toggleSave(false)} />
      ) : (
        <OptBtn icon="bookmark-save" onClick={() => toggleSave(true)} />
      )}
      <EditCard />
      {/* <OptBtn icon="trash" /> */}
      <CopyText ele="h4" />
    </div>
  );
};

export default CardOptions;
