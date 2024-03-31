import getPageStaticPaths from "./getPageStaticPaths";
import getPageStaticProps from "./getPageStaticProps";
import processPageQuery from "./processPageQuery";

const ModulePage = {
    getPageStaticPaths: async function (postType) {
      return await getPageStaticPaths(postType);
    },
    getPageStaticProps: async function ( params,
        postType,
        preview = false,
        previewData = null,) {
        return await getPageStaticProps( params,
            postType,
            preview = false,
            previewData = null,);
      },
      processPageQuery: async function ( postType,
        query,
        variables = {},
        preview = null,) {
        return await processPageQuery( postType,
            query,
            variables = {},
            preview = null,);
      },
  
  };
  
  export default ModulePage;