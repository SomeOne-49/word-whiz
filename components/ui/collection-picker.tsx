import { Accordion, AccordionItem } from '@nextui-org/accordion';
import Image from 'next/image';

const collections = [
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
  {
    name: 'Collection name',
    icon: '🇸🇦',
  },
];

const CollectionList = () => {
  const itemClasses = {
    base: 'py-10 w-full',
    title: 'font-normal text-medium',
    trigger: 'py-2.5 px-3',
    content: 'bg-primary-light rounded-xl py-1.5 px-3 mt-1',
  };

  return (
    <Accordion
      showDivider={true}
      className="p-0"
      itemClasses={itemClasses}
    >
      <AccordionItem
        key="1"
        aria-label="collections"
        classNames={{
          base: 'px-0',
          heading: 'bg-primary-light rounded-xl hover:bg-primary-dark',
          title: '!text-primary',
        }}
        title="Collection"
        startContent={
          <Image
            src='/assets/icons/folder.svg'
            alt="folder"
            width={22}
            height={22}
          />
        }
      >
        <div className="flex flex-col gap-2.5 py-1 max-h-36 overflow-auto">
          {collections.map((collection) => (
            <button className="flex gap-3 items-center px-3 py-1 hover:bg-primary-dark text-primary rounded-lg">
              <span>{collection.icon}</span>
              <span>{collection.name}</span>
            </button>
          ))}
        </div>
      </AccordionItem>
    </Accordion>
  );
};

export default CollectionList;
