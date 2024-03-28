import { useShopContext } from '@/utils/context/ShopProvider';

const PaymentCardFields = () => {
  const { cart } = useShopContext();

  return (
    <div className="mt-6 grid grid-cols-4 gap-y-6 gap-x-4">
      <div className="col-span-4">
        <label
          htmlFor="card-number"
          className="block text-sm font-medium text-gray-700"
        >
          Card number
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="card-number"
            name="card-number"
            autoComplete="cc-number"
            className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-4">
        <label
          htmlFor="name-on-card"
          className="block text-sm font-medium text-gray-700"
        >
          Name on card
        </label>
        <div className="mt-1">
          <input
            type="text"
            id="name-on-card"
            name="name-on-card"
            autoComplete="cc-name"
            className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div className="col-span-3">
        <label
          htmlFor="expiration-date"
          className="block text-sm font-medium text-gray-700"
        >
          Expiration date (MM/YY)
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="expiration-date"
            id="expiration-date"
            autoComplete="cc-exp"
            className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>

      <div>
        <label
          htmlFor="cvc"
          className="block text-sm font-medium text-gray-700"
        >
          CVC
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="cvc"
            id="cvc"
            autoComplete="csc"
            className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300  block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
      </div>
    </div>
  );
};

export default PaymentCardFields;
