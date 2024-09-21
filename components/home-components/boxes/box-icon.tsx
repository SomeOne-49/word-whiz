type Props = {
  bg?: string;
  size: string;
  icon: string;
};

const BoxIcon = ({ bg, size, icon }: Props) => {
  return (
    <div
      className={`relative rounded-full shadow-md ${!bg && 'bg-white'} ${size}`}
      style={(bg && { backgroundColor: bg }) || {}}
    >
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-[-40%] ">
        {icon}
      </div>
    </div>
  );
};

export default BoxIcon;
