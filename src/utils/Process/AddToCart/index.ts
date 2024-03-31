import client from '../../apollo/ApolloClient';
import { queryProductAddToCart } from './queryProductAddToCart';



const ModuleAddToCart = {
  queryProductAddToCart: async function (input) {
    return await queryProductAddToCart(input);
  },
 
};

export default ModuleAddToCart;