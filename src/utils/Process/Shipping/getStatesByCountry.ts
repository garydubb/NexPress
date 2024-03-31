import client from '@/utils/apollo/ApolloClient';
import queryShippingStatesByCountry from '@/utils/queries/shop/shipping/queryShippingStatesByCountry';

export default async function getStatesByCountry(country) {
  if (!country) return;
  const { data } = await client.query({
    query: queryShippingStatesByCountry,
    variables: {
      country: `${country}`,
    },
  });

  return data.countryStates;
}
