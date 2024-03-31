import getProductsStaticPaths from "./getProductsStaicPaths";
import getProductTypeStaticProps from "./getProductsStaticProps";
import processProductTypeQuery from "./processProductQuery";

const Moduleproduct = {
    getProductsStaticPaths: async function (postType) {
      return await getProductsStaticPaths(postType);
    },
    getProductTypeStaticProps: async function ( params,
        postType,
        preview = false,
        previewData = null,) {
        return await getProductTypeStaticProps( params,
            postType,
            preview = false,
            previewData = null,);
      },
      processProductTypeQuery: async function ( postType,
        query,
        variables = {},
        preview = null,) {
        return await processProductTypeQuery( postType,
            query,
            variables = {},
            preview = null,);
      },
 
      
  };
  
  export default Moduleproduct;