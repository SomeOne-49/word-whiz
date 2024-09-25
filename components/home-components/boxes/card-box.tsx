'use client';
import { SheetClose } from '@/components/ui/sheet';
import useStore from '@/store/useStore';
import Link from 'next/link';
import Box from './box';
import BoxIcon from './box-icon';

type Props = {
  colored?: boolean;
  front: string;
  back: string;
  bg: string;
  idx: number;
  color: string;
  collection: {
    id: string;
    name: string;
    icon: string;
    iconBg: string;
  };
};

const CardBox = ({
  idx,
  colored,
  front,
  back,
  bg,
  color,
  collection: { id, name, icon, iconBg },
}: Props) => {
  const { updateCurrent, updateSearch } = useStore();
  const changeDefaulteCard = () => {
    updateCurrent(idx);
    updateSearch('');
    document.getElementById('close')?.click();
  };
  return (
    <Box colored={colored} bg={bg}>
      <SheetClose className="hidden" id="close" />
      <Link
        href={`/collections/${id}`}
        className={`flex grow flex-col`}
        onClick={changeDefaulteCard}
      >
        <div className="mb-1 flex items-center gap-2">
          <h5
            className="text-xl font-semibold"
            style={{ color: color || '#0279B2' }}
          >
            {front} / {back}
          </h5>
        </div>
        <div className="flex items-center gap-1">
          <BoxIcon size="size-7 text-lg" bg={iconBg} icon={icon} />
          <p className="text-sm text-gray-500">{name}</p>
        </div>
      </Link>
    </Box>
  );
};

export default CardBox;
