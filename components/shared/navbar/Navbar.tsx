import { Button } from '@/components/ui/button';
import Image from 'next/image';
import AddingSheet from './adding-sheet';
import SearchSheet from './search-sheet';

const Navbar = () => {
  return (
    <footer className="xs:justify-around flex items-center justify-between rounded-2xl bg-white px-6 py-2">
      <AddingSheet />
      <Button variant={'ghost'}>
        <Image
          src="/assets/icons/home.svg"
          width={27}
          height={20}
          alt="Home"
        />
      </Button>
      <SearchSheet />
    </footer>
  );
};

export default Navbar;
