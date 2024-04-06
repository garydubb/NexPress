import { useShopContext } from '@/utils/context/ShopProvider';
import { useFormikContext } from 'formik';
import { useEffect, useState } from 'react';
import {
  ShippingCountries,
  ShippingProvince,
} from '../../../CartShippingCalculator/components';

const BillingForm = () => {
  const [country, setCountry] = useState(null);
  const [province, setProvince] = useState(null);
  const { cart, customer } = useShopContext();
  const { values, setFieldValue, errors, touched, getFieldProps } =
    useFormikContext();
  useEffect(() => {
    console.log(customer);
    if (customer) {
      const { shipping } = customer;
      setCountry(shipping.country);
      setProvince(shipping.state);
    }
  }, [customer]);

  // const handleChange = (e: any) => {
  //   console.log(e.target.name);
  //   //setFieldValue(type + '.' + e.target.name, e.target.value);
  // };

  return (
    <div>
      <div className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          {/* First Name */}
          <div>
            <label
              htmlFor="first-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              First Name <span className="text-primary">*</span>
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="firstName"
                id="first-name"
                required
                className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
                {...getFieldProps('billing.firstName')}
              />
            </div>
          </div>

          {/* Last Name */}
          <div>
            <label
              htmlFor="last-name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Last Name <span className="text-primary">*</span>
            </label>
            <div className="relative mt-2 rounded-md shadow-sm">
              <input
                type="text"
                name="lastName"
                id="last-name"
                required
                className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
                {...getFieldProps('billing.lastName')}
              />
            </div>
          </div>
        </div>

        {/* Company */}
        <div>
          <label
            htmlFor="company"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Company
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="company"
              id="company"
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.company')}
            />
          </div>
        </div>

        {/* Street Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street address
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="address1"
              id="address1"
              required
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.address1')}
            />
          </div>
        </div>

        {/* Street Address */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Street address 2 (Optional)
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="address2"
              id="address2"
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.address2')}
            />
          </div>
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            City
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="city"
              id="city"
              required
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.city')}
            />
          </div>
        </div>

        {/* State / Province */}
        <div>
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            State/Province
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="py-1.5  w-full">
              <ShippingProvince
                province={province}
                setProvince={setProvince}
                country={country}
              />
            </div>
          </div>
        </div>

        {/* Country/Region */}
        <div>
          <label
            htmlFor="region"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Country
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="py-1.5  w-full">
              <ShippingCountries country={country} setCountry={setCountry} />
            </div>
          </div>
        </div>

        {/* City */}
        <div>
          <label
            htmlFor="city"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Postal code/ Zip code
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="text"
              name="postcode"
              id="postcode"
              required
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.postcode')}
            />
          </div>
        </div>

        {/* Phone Number */}
        <div>
          <label
            htmlFor="phone"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Phone number
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <span className="absolute pl-2 start-0 bottom-3 text-gray-500 dark:text-gray-400">
              <svg
                className="w-4 h-4 rtl:rotate-[270deg]"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 19 18"
              >
                <path d="M18 13.446a3.02 3.02 0 0 0-.946-1.985l-1.4-1.4a3.054 3.054 0 0 0-4.218 0l-.7.7a.983.983 0 0 1-1.39 0l-2.1-2.1a.983.983 0 0 1 0-1.389l.7-.7a2.98 2.98 0 0 0 0-4.217l-1.4-1.4a2.824 2.824 0 0 0-4.218 0c-3.619 3.619-3 8.229 1.752 12.979C6.785 16.639 9.45 18 11.912 18a7.175 7.175 0 0 0 5.139-2.325A2.9 2.9 0 0 0 18 13.446Z" />
              </svg>
            </span>
            <input
              type="text"
              name="phone"
              id="phone"
              required
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.phone')}
            />
          </div>
        </div>

        {/* Email Address */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium leading-6 text-gray-900"
          >
            Email address
          </label>
          <div className="relative mt-2 rounded-md shadow-sm">
            <input
              type="email"
              name="email"
              id="email"
              required
              className="py-1.5 pl-7 pr-20 ring-1 ring-inset ring-gray-300 w-full"
              {...getFieldProps('billing.email')}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BillingForm;
