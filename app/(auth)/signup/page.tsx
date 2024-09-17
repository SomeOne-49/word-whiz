import { Button } from '@/components/ui/button';
import OrSeparator from '@/components/ui/custom/or-separator';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex h-full flex-col gap-2 px-4 py-2">
      <div className=" mb-3 text-white">
        <h5 className="text-3xl font-semibold">Sign Up</h5>
        <p className="">Get started 💪🏼</p>
      </div>
      <Input placeholder="Full Name" icon="user" />
      <Input placeholder="Email Address" icon="email" />
      <Input placeholder="Password" icon="lock" />
      <Input placeholder="Confirm Password" icon="lock" />
      <Button className="mt-2">Sign Up</Button>
      <OrSeparator />
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-3">
          <Button variant="secondary" className="h-10 w-1/2">
            <Image
              src="/assets/icons/google.svg"
              width={20}
              height={20}
              alt="shape"
            />
          </Button>
          <Button variant="secondary" className="h-10 w-1/2">
            <Image
              src="/assets/icons/apple.svg"
              width={20}
              height={20}
              alt="shape"
            />
          </Button>
        </div>
        <h5 className="flex justify-center gap-1 text-sm font-semibold text-white ">
          Already have an account?
          <Link href="/signin" className="text-primary-dark">
            Login.
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
