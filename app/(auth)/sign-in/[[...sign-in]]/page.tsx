'use client';
import CBtn from '@/components/clerk/btn';
import CConnection from '@/components/clerk/connection';
import CError from '@/components/clerk/field-error';
import CInput from '@/components/clerk/input';
import { Button } from '@/components/ui/button';
import OrSeparator from '@/components/ui/custom/or-separator';
import * as Clerk from '@clerk/elements/common';
import * as SignIn from '@clerk/elements/sign-in';
import Link from 'next/link';
const Login = () => {
  return (
    <SignIn.Root>
      <SignIn.Step name="start">
        <div className="flex h-full flex-col gap-3 px-4 py-2">
          <div className=" mb-3 text-white">
            <h5 className="text-3xl font-semibold">Login</h5>
            <p className="">Welcome, Back 😼</p>
          </div>

          <Clerk.Field name="identifier">
            <CInput icon="user" placeholder="Email Address" />
            <CError />
          </Clerk.Field>
          <CBtn title="Continue" />
          <OrSeparator />
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <CConnection name="google" />
              <CConnection name="apple" />
            </div>
            <h5 className="flex justify-center gap-1 text-sm font-semibold text-white ">
              Don&apos;t have an account?
              <Link href="/sign-up" className="text-primary-dark">
                Create one.
              </Link>
            </h5>
          </div>
        </div>
      </SignIn.Step>

      <SignIn.Step name="verifications">
        <SignIn.Strategy name="email_code">
          <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-12">
            <div className=" mb-3 text-white">
              <h5 className="text-3xl font-semibold">Check your email</h5>
              <p className="">
                We sent a code to{' '}
                <span className="text-primary-dark">
                  <SignIn.SafeIdentifier />.
                </span>
              </p>
            </div>

            <Clerk.Field name="code">
              <CInput icon="email" placeholder="Email Code" />
              <CError />
            </Clerk.Field>

            <CBtn title="Continue" />
            <SignIn.Action navigate="choose-strategy">
              <Button variant="outline" className="w-full">
                try another method
              </Button>
            </SignIn.Action>
          </div>
        </SignIn.Strategy>

        <SignIn.Strategy name="password">
          <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-10">
            <div className="text-white">
              <h5 className="text-3xl font-semibold">Enter your password</h5>
            </div>

            <Clerk.Field name="password">
              <CInput icon="lock" placeholder="Password" />
              <CError />
            </Clerk.Field>

            <SignIn.Action
              navigate="forgot-password"
              className="text-start text-sm text-white"
            >
              Forgot password?
            </SignIn.Action>
            <CBtn title="Login" />
            <SignIn.Action navigate="choose-strategy">
              <Button variant="outline" className="w-full">
                try another method
              </Button>
            </SignIn.Action>
          </div>
        </SignIn.Strategy>

        <SignIn.Strategy name="reset_password_email_code">
          <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-12">
            <div className=" mb-3 text-white">
              <h5 className="text-3xl font-semibold">Check your email</h5>
              <p className="">
                We sent a code to{' '}
                <span className="text-primary-dark">
                  <SignIn.SafeIdentifier />.
                </span>
              </p>
            </div>

            <Clerk.Field name="code">
              <CInput icon="email" placeholder="Email Code" />
              <CError />
            </Clerk.Field>

            <CBtn title="Continue" />
          </div>
        </SignIn.Strategy>
      </SignIn.Step>

      <SignIn.Step name="choose-strategy">
        <div className="flex h-full flex-col gap-3 px-4 pt-12">
          <div className="mb-3 text-white">
            <h5 className="text-3xl font-semibold">Choose Strategy</h5>
          </div>

          <div className="flex flex-col gap-3">
            <SignIn.SupportedStrategy name="email_code">
              <Button className="w-full">Sign in with email code</Button>
            </SignIn.SupportedStrategy>
            <SignIn.Action navigate="previous">
              <Button className="w-full">Sign in with password</Button>
            </SignIn.Action>

            <OrSeparator />
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-3">
                <CConnection name="google" />
                <CConnection name="apple" />
              </div>
              <h5 className="flex justify-center gap-1 text-sm font-semibold text-white ">
                Don&apos;t have an account?
                <Link href="/sign-up" className="text-primary-dark">
                  Create one.
                </Link>
              </h5>
            </div>
          </div>
        </div>
      </SignIn.Step>

      <SignIn.Step name="forgot-password">
        <div className="flex h-full flex-col gap-3 px-4 pt-12">
          <div className="mb-3 text-white">
            <h5 className="text-3xl font-semibold">Forgot your password?</h5>
          </div>

          <div className="flex flex-col gap-3">
            <SignIn.SupportedStrategy name="reset_password_email_code">
              <Button className="w-full">Reset password</Button>
            </SignIn.SupportedStrategy>
            <SignIn.Action navigate="previous">
              <Button className="w-full">Go back</Button>
            </SignIn.Action>
          </div>
        </div>
      </SignIn.Step>

      <SignIn.Step name="reset-password">
        <div className="flex h-full flex-col gap-3 px-4 pb-5 pt-12">
          <div className="mb-3 text-white">
            <h5 className="text-3xl font-semibold">Reset your password</h5>
          </div>

          <div className="flex flex-col gap-3">
            <Clerk.Field name="password">
              <CInput icon="lock" placeholder="Password" />
              <CError />
            </Clerk.Field>
            <Clerk.Field name="confirmPassword">
              <CInput icon="lock" placeholder="Confirm Password" />
              <CError />
            </Clerk.Field>
            <CBtn title="Reset password" />
          </div>
        </div>
      </SignIn.Step>
    </SignIn.Root>
  );
};

export default Login;
