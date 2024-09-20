import Link from 'next/link';
import Box from './box';
// import BoxIcon from './box-icon';

type Props = {
  colored?: boolean;
  title: string;
  iconBg?: string;
  link: string;
  collection: {
    name: string;
    icon: string;
  };
};

const CardBox = ({
  colored,
  title,
  iconBg,
  link,
  collection: { name, icon },
}: Props) => {
  return (
    <Box colored={colored}>
      <Link href={link} className={`flex flex-col`}>
        <h5 className="text-lg font-semibold text-primary">{title}</h5>
        <div className="flex items-center gap-1">
          {/* <BoxIcon size="size-7 text-lg" bg={iconBg} icon={icon} /> */}
          <p className="text-sm text-gray-500">{name}</p>
        </div>
      </Link>
    </Box>
  );
};

export default CardBox;
