import getShippingCountries from './getShippingCountries';
import getStatesByCountry from './getStatesByCountry';
import querySetCustomerShippingAddress from './querySetCustomerShippingAddress';

const ModuleShipping = {
  allowedCountries: getShippingCountries(),
  getStates: function (country) {
    return getStatesByCountry(country);
  },
  setShipping: querySetCustomerShippingAddress,
};

export default ModuleShipping;
