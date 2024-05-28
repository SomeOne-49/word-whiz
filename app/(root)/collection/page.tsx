import { Slider } from "@nextui-org/slider";

const Collectin = () => {
  return (
    <section className="relative">
      <div className="absolute -left-3 top-[-82px] h-[75vh] w-screen rounded-b-[65px] bg-gray-200">
      </div>
        <Slider
          label="Currency"
          showTooltip={true}
          formatOptions={{ style: 'currency', currency: 'JPY' }}
          tooltipValueFormatOptions={{ style: 'currency', currency: 'JPY' }}
          defaultValue={40}
          className="max-w-md"
        />
    </section>
  );
};

export default Collectin;
