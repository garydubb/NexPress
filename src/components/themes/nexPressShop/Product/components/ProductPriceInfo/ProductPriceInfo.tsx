// PriceInfo.jsx

const PriceInfo = () => {
  return (
    <div className="flex items-baseline mb-1 space-x-2 font-roboto mt-4">
      <p className="text-xl text-primary font-semibold">$45.00</p>
      <p className="text-base text-gray-400 line-through">$55.00</p>
    </div>
  );
};

export default PriceInfo;
