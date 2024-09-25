// import {
//   Tooltip,
//   TooltipContent,
//   TooltipProvider,
//   TooltipTrigger,
// } from '@/components/ui/tooltip';
import React from 'react';

const Box = ({
  children,
  colored,
  disabled = false,
  bg = 'rgb(128 214 255 / 50%)',
}: {
  children: React.ReactNode;
  colored?: boolean;
  disabled?: boolean;
  bg?: string;
}) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99]`}
      style={{ backgroundColor: bg }}
    >
      {children}
    </div>
    // <>
    //   {disabled ? (
    //     <TooltipProvider>
    //       <Tooltip>
    //         <TooltipTrigger asChild>
    //           <div
    //             className={`flex items-center gap-2 rounded-xl bg-primary-dark px-3.5 py-2 opacity-50 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99]`}
    //           >
    //             {children}
    //           </div>
    //         </TooltipTrigger>
    //         <TooltipContent>
    //           <p>Add Some Cards To Open It.</p>
    //         </TooltipContent>
    //       </Tooltip>
    //     </TooltipProvider>
    //   ) : (
    //     <div
    //       className={`flex items-center gap-2 rounded-xl px-3.5 py-2 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99] ${colored ? 'bg-primary-light/75' : 'bg-white'}`}
    //     >
    //       {children}
    //     </div>
    //   )}
    // </>
  );
};

export default Box;
