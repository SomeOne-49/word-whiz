'use client';
import Image from 'next/image';
import { useState } from 'react';
type Props = {
  isImg: boolean;
  toggleImg: any;
}
const BoxActions = ({isImg,toggleImg} : Props) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      className={`absolute bottom-3 right-3 z-30  flex w-12 items-center gap-3 overflow-hidden rounded-xl bg-white p-2 duration-1000 cursor-pointer transition-height ${isOpen ? 'h-[225px] flex-col-reverse' : 'h-10 flex-col '}`}
      onClick={() => setIsOpen(!isOpen)}
    >
      <div className="flex h-6 shrink-0 items-center">
        {isOpen ? (
          <Image
            src="/assets/icons/close.svg"
            width={18}
            height={18}
            alt="eye"
          />
        ) : (
          <Image
            src="/assets/icons/dots.svg"
            width={22}
            height={22}
            alt="eye"
          />
        )}
      </div>
      <div className="flex h-6 shrink-0 items-center">
        <Image
          src="/assets/icons/volume.svg"
          width={22}
          height={22}
          alt="eye"
        />
      </div>
      <div className="flex h-6 shrink-0 items-center" onClick={toggleImg}>
        <Image
          src={isImg ? '/assets/icons/word.svg' : '/assets/icons/gallery.svg'}
          width={22}
          height={22}
          alt="eye"
        />
      </div>
      <div className="flex h-6 shrink-0 items-center">
        <Image
          src="/assets/icons/bookmark-save.svg"
          width={22}
          height={22}
          alt="eye"
        />
      </div>
      <div className="flex h-6 shrink-0 items-center">
        <Image
          src="/assets/icons/edit.svg"
          width={22}
          height={22}
          alt="eye"
        />
      </div>
      <div className="flex h-6 shrink-0 items-center">
        <Image
          src="/assets/icons/trash.svg"
          width={22}
          height={22}
          alt="eye"
        />
      </div>
    </div>
  );
};

export default BoxActions;
