'use client';
import { motion } from 'framer-motion';
import { useState } from 'react';
import Back from './back';
import CardAction from './card-action';
import Front from './front';

type Props = {
  front: string;
  back: string;
  note: string;
  color: string;
};
const WordCard = ({ front, back, note, color }: Props) => {
  const [isFront, setIsFront] = useState(true);

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 20 }}  
        animate={{ opacity: 1, y: 0 }}  
        exit={{ opacity: 0, y: 20 }}  
        transition={{ ease: 'easeInOut', duration: .6 }}
      >
        <div className="relative mx-auto h-80 w-[320px] max-w-[95%] ">
          <Front isFront={isFront} front={front} color={color} />
          <Back isFront={isFront} back={back} note={note} />
        </div>
      </motion.div>
      <div className="fixed left-1/2 top-0 -z-30 h-[75vh] max-h-[732px] w-screen max-w-sm -translate-x-1/2 rounded-b-[75px] bg-gray-200/75">
        <CardAction
          isFront={isFront}
          toggleFront={() => setIsFront(!isFront)}
        />
      </div>
    </>
  );
};

export default WordCard;
