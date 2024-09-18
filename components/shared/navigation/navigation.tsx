import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';
import AddingSheet from './add/adding-sheet';
import SearchSheet from './search/search-sheet';

const Navigation = () => {
  return (
    <footer className="xs:justify-around flex items-center justify-between rounded-2xl bg-primary px-6 py-2">
      <AddingSheet />
      <Link href="/">
        <Button variant={'ghost'}>
          <Image
            src="/assets/icons/home-white.svg"
            width={37}
            height={37}
            alt="Home"
          />
        </Button>
      </Link>
      <SearchSheet />
    </footer>
  );
};

export default Navigation;
