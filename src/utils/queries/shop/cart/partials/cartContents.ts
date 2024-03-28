import cartExtraData from './cartExtraData';
import cartProduct from './cartProduct';

const cartConents = `
      contents {
        nodes {
          ${cartExtraData}
          key
          ${cartProduct}
          quantity
          total
          subtotal
          subtotalTax
        }
      }

`;

export default cartConents;
