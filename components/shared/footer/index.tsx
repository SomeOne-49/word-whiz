
import { Button } from '@nextui-org/button';
import Image from 'next/image';
import AddNew from './add-new';

const Footer = () => {
  return (
    <footer className="relative z-40 flex min-h-11 shrink-0 items-center justify-around rounded-2xl border border-primary bg-white p-2 text-primary">
      <AddNew/>
      <Button
        variant="light"
        color="primary"
        className="h-auto min-w-fit p-1.5"
      >
        <Image src="/assets/icons/home.svg" alt="Home" width={32} height={32} />
      </Button>
      <Button
        variant="light"
        color="primary"
        className="h-auto min-w-fit p-1.5"
      >
        <Image
          src="/assets/icons/search.svg"
          alt="Search"
          width={32}
          height={32}
        />
      </Button>
    </footer>
  );
};

export default Footer;
