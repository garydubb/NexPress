import ModuleShipping from '@/utils/Process/Shipping';
import { useShopContext } from '@/utils/context/ShopProvider';
import { allCountries } from '@/utils/static/countries';
import { useEffect, useState } from 'react';
import ShopPreloader from '../../../ShopPreloader';

type ShippingCountriesProps = {
  country: string;
  setCountry: (country: string) => void;
};

interface CountryType {
  code: string;
  label: string;
  phone?: string;
  suggested?: boolean;
  image?: boolean;
}

const ShippingCountries = ({ country, setCountry }: ShippingCountriesProps) => {
  const [loading, setLoading] = useState(true);
  const [countries, setCountries] = useState<CountryType[]>([]);
  const { customer } = useShopContext();
  useEffect(() => {
    const fetchCountries = async () => {
      const { data } = await ModuleShipping.allowedCountries;
      const allowedCountries = data.allowedCountries;

      const filteredCountries: CountryType[] = allCountries
        .filter((country) => allowedCountries.includes(country.abbr))
        .map(({ name, suggested, abbr }) => ({
          code: abbr,
          label: name,
          suggested,
          image: true,
        }));

      setCountries(filteredCountries);
      setLoading(false);
    };

    fetchCountries();

    if (customer) {
      const { shipping } = customer;
      setCountry(shipping.country);
    }
  }, []);
  return (
    <>
      {loading ? (
        <ShopPreloader />
      ) : (
        <select
          className="block w-full p-2 rounded-md border-0 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 "
          value={country}
          required
          onChange={(e) => setCountry(e.target.value)}
        >
          <option value="">Select Country</option>
          {countries.map((country) => (
            <option key={country.code} value={country.code}>
              {country.label}
            </option>
          ))}
        </select>
      )}
    </>
  );
};

export default ShippingCountries;
