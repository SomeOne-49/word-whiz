'use client';
import { useState } from 'react';
import OptBtn from './opt-btn';

const Back = ({ isFront }: { isFront: boolean }) => {
  const [isDescription, setIsDescription] = useState(false);
  return (
    <div className="center_ele absolute bottom-[-10%] left-1/2 h-[180px]  w-[90%] -translate-x-1/2  rounded-3xl bg-white ">
      {isDescription ? (
        <h4
          className={`p-3 text-center text-3xl font-semibold text-primary transition-all duration-500 ${!isFront ? 'mt-0' : '-mt-32'}`}
        >
          حقيبة يد حقيبة
        </h4>
      ) : (
        <h4
          className={`line-clamp-3 max-h-[90px] p-3 text-lg font-semibold text-primary transition-all duration-500 ${!isFront ? 'mt-0' : '-mt-32'}`}
        >
          اليوم صباحاً خرجت من البيت اليوم صباحاً خرجت من البيت بثياب أنيقة وحقيبة يد كبيرة 
        </h4>
      )}
      <div
        className={`absolute bottom-3 right-3 z-20 flex flex-col-reverse items-center gap-1 overflow-hidden rounded-2xl bg-primary-light p-1.5 shadow-md ${isFront ? 'opacity-0' : 'opacity-100'}  transition-opacity duration-500`}
      >
        {isDescription ? (
          <OptBtn
            icon="note"
            onClick={() => setIsDescription(!isDescription)}
          />
        ) : (
          <OptBtn
            icon="word"
            onClick={() => setIsDescription(!isDescription)}
          />
        )}
      </div>
    </div>
  );
};

export default Back;
