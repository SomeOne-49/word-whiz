import React from 'react';

const Box = ({
  children,
  colored,
}: {
  children: React.ReactNode;
  colored?: boolean;
}) => {
  return (
    <div
      className={`flex items-center gap-2 rounded-xl px-3.5 py-2 shadow-sm transition duration-500 hover:scale-[1.01] active:scale-[.99] ${colored ? 'bg-primary-light' : 'bg-white'}`}
    >
      {children}
    </div>
  );
};

export default Box;
