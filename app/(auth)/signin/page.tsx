import { Button } from '@/components/ui/button';
import OrSeparator from '@/components/ui/custom/or-separator';
import { Input } from '@/components/ui/input';
import Image from 'next/image';
import Link from 'next/link';

const Login = () => {
  return (
    <div className="flex h-full flex-col gap-2 px-4 py-2">
      <div className=" mb-3 text-white">
        <h5 className="text-3xl font-semibold">Login</h5>
        <p className="">Welcome, Back 😼</p>
      </div>
      <Input placeholder="Username or Email" icon="user" />
      <Input placeholder="Password" icon="lock" />
      <Link className="text-sm text-white" href="/forget-password">
        Forget password?
      </Link>
      <Button className="mt-3">Login</Button>
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
          Don&apos;t have an account?
          <Link href="/signup" className="text-primary-dark">
            Create one.
          </Link>
        </h5>
      </div>
    </div>
  );
};

export default Login;
