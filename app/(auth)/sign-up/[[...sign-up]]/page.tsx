'use client';
import CBtn from '@/components/clerk/btn';
import CConnection from '@/components/clerk/connection';
import CError from '@/components/clerk/field-error';
import CInput from '@/components/clerk/input';
import OrSeparator from '@/components/ui/custom/or-separator';
import * as Clerk from '@clerk/elements/common';
import * as SignUp from '@clerk/elements/sign-up';
import Link from 'next/link';

const Login = () => {
  return (
    <SignUp.Root>
      <SignUp.Step name="start">
        <div className="flex h-full flex-col gap-3 px-4 py-2">
          <div className=" mb-3 text-white">
            <h5 className="text-3xl font-semibold">Sign Up</h5>
            <p className="">Get started 💪🏼</p>
          </div>

          <Clerk.Field name="name">
            <CInput placeholder="Full Name" icon="user" />
            <CError/>
          </Clerk.Field>
          <Clerk.Field name="emailAddress">
            <CInput placeholder="Email Address" icon="email" />
            <CError/>
          </Clerk.Field>
          <Clerk.Field name="password">
            <CInput placeholder="Password" icon="lock" />
            <CError/>
          </Clerk.Field>
          <CBtn title="Sign up" />

          <OrSeparator />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CConnection name="google" />
              <CConnection name="apple" />
            </div>
            <h5 className="flex justify-center gap-1 text-sm font-semibold text-white ">
              Already have an account?
              <Link href="/sign-in" className="text-primary-dark">
                Login.
              </Link>
            </h5>
          </div>
        </div>
      </SignUp.Step>

      <SignUp.Step name="verifications">
        <SignUp.Strategy name="email_code">
          <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-12">
            <div className=" mb-3 text-white">
              <h5 className="text-3xl font-semibold">Check your email</h5>
            </div>

            <Clerk.Field name="code">
              <CInput icon="email" placeholder="Email Code" />
              <CError />
            </Clerk.Field>

            <CBtn title="Verify" />
          </div>
        </SignUp.Strategy>
      </SignUp.Step>
    </SignUp.Root>
  );
};

export default Login;
