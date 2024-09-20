import * as Clerk from '@clerk/elements/common';

const CError = () => {
  return <Clerk.FieldError className='mt-2 block rounded-lg bg-red-500 p-2 text-white transition-all duration-500' />;
};

export default CError;
