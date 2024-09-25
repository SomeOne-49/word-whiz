import Image from 'next/image';
import Link from 'next/link';
import Box from '../box';
import BoxIcon from '../box-icon';
import CollectionOptions from './collection-options';
type Props = {
  id: string;
  colored?: boolean;
  name: string;
  icon: string;
  color?: string;
  date: string;
  items: number;
  link: string;
};
const CollectionBox = ({
  id,
  colored,
  name,
  icon,
  color,
  date,
  items,
  link,
}: Props) => {
  const disabled = items < 1;
  return (
    <Box colored={colored} disabled={disabled}>
      <Link href={link} className="flex grow items-center gap-4">
        <BoxIcon size="size-12 text-3xl" bg={color} icon={icon} />
        <div className="flex grow flex-col gap-0.5">
          <h5 className="text-lg font-semibold text-primary">{name}</h5>
          <div className="flex items-center justify-between gap-3 text-sm text-gray-500">
            <p className="flex items-center gap-1">
              <Image
                src="/assets/icons/cards-dark.svg"
                width={18}
                height={18}
                alt="cards"
              />
              <span>{items}</span>
            </p>
            <p className="flex items-center gap-1">
              <Image
                src="/assets/icons/calendar-dark.svg"
                width={18}
                height={18}
                alt="calendar"
              />
              <span>{new Date(date).toLocaleDateString()}</span>
            </p>
          </div>
        </div>
      </Link>
      <CollectionOptions
        collection={JSON.stringify({ id, name, color, icon })}
        id={id}
        name={name}
      />
    </Box>
  );
};

export default CollectionBox;
