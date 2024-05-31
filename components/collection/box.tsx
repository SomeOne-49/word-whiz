import Image from 'next/image';
import BackToggler from './back-toggler';
import BoxActions from './box-actions';
import FrontToggler from './front-toggler';

type Props = {
  front: string;
  back: string;
  desc: string;
  isHide: boolean;
};
const Box = ({ front, back, desc, isHide }: Props) => {
  return (
    <div className="relative mt-14 flex items-center justify-center">
      <div
        className={`relative z-10 overflow-hidden grid w-[250px] place-content-center rounded-3xl bg-primary-light text-2xl font-semibold text-primary shadow-md duration-1000 transition-height delay-200 ${isHide ? 'h-[250px]' : 'h-[140px]'}`}
      >
        <FrontToggler front={front} isHide={isHide} img='/assets/dev/card-img.svg' />
      </div>
      <div
        className={`absolute left-1/2 z-[2]  h-[130px] -translate-x-1/2  rounded-3xl bg-white font-semibold text-primary shadow-md transition-all duration-1000 ${isHide ? ' -bottom-4 w-[200px]' : 'bottom-[-115px] w-[225px]'}`}
      >
        <BackToggler desc={desc} back={back} isHide={isHide} />
      </div>
    </div>
  );
};

export default Box;
