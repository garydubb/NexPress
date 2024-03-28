type ShippingCityProps = {
  city: string;
  setCity: (city: string) => void;
};

const ShippingCity = ({ city, setCity }: ShippingCityProps) => {
  return (
    <div className="sm:col-span-3">
      <div className="mt-2">
        <input
          type="text"
          placeholder="City"
          className="block w-full placeholder:p-3 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 placeholder-left-0" // Updated class name
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ShippingCity;
