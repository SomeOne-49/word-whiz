import * as SignIn from '@clerk/elements/sign-in';

import { Button } from '../ui/button';

const CBtn = ({title} : {title: string}) => {
  return (
    <SignIn.Action submit className='w-full'>
      <Button className='w-full'>{title}</Button>
    </SignIn.Action>
  );
};

export default CBtn;
