type ShippingPostalCodeProps = {
  postalCode: string;
  setPostalCode: (postalCode: string) => void;
};

const ShippingPostalCode = ({
  postalCode,
  setPostalCode,
}: ShippingPostalCodeProps) => {
  return (
    <div className="sm:col-span-3">
      <div className="mt-2">
        <input
          type="text"
          placeholder="Postal Code"
          className="block w-full placeholder:p-3 px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          value={postalCode}
          onChange={(e) => setPostalCode(e.target.value)}
        />
      </div>
    </div>
  );
};

export default ShippingPostalCode;
