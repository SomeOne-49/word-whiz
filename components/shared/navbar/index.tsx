// import { ThemeSwitch } from '@/components/theme-switch';
import Image from 'next/image';
import Link from 'next/link';
import AvatarDropdown from './dropdown';

const Navbar = () => {
  return (
    <header className="relative z-40 flex min-h-11 shrink-0 items-center justify-between  rounded-2xl border border-primary bg-white p-2 text-primary">
      <Link href="/">
        <Image src="/assets/logo.svg" alt="logo" width={135} height={26} />
      </Link>
      <div className="flex items-center gap-3">
        {/* <ThemeSwitch /> */}
        <AvatarDropdown />
      </div>
    </header>
  );
};

export default Navbar;
