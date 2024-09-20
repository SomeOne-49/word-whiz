import { Button } from '@/components/ui/button';
import Image from 'next/image';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="flex h-full flex-col gap-2 px-4 py-2">
      <div className="absolute left-1/2 top-[-70%] flex w-full -translate-x-1/2 justify-center">
        <Image src="/assets/app-name.svg" width={300} height={50} alt="logo" />
      </div>
      <div className=" text-white">
        <h5 className="pb-3 pt-12 text-center text-3xl font-semibold">
          Hi there...👋🏻
        </h5>
      </div>
      <div className="flex flex-col items-center gap-3 pb-12">
        <Link href="/sign-up">
          <Button
            variant='secondary'
            className="w-36 rounded-full py-2 text-lg font-normal"
          >
            Sign Up
          </Button>
        </Link>
        <Link href="/sign-in">
          <Button
            className="w-36 rounded-full pt-2 text-lg font-normal"
            variant="outline"
          >
            Login
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Welcome;
