import getBlogHomePage from "./getBlogHomePage";
import getBlogPostsStaticPaths from "./getBlogPostsStaticPaths";
import getBlogPostsStaticProps from "./getBlogPostsStaticProps";
import processBlogPostsQuery from "./processBlogPostsQuery";

const ModuleBlog = {
    getBlogPostsStaticPaths: async function (postType) {
      return await getBlogPostsStaticPaths(postType);
    },
    getBlogPostsStaticProps: async function ( params,
        postType,
        preview = false,
        previewData = null,) {
        return await getBlogPostsStaticProps( params,
            postType,
            preview = false,
            previewData = null,);
      },
      processBlogPostsQuery: async function ( postType,
        query,
        variables = {},
        preview = null,) {
        return await processBlogPostsQuery( postType,
            query,
            variables = {},
            preview = null,);
      },

      getBlogHomePage: async function () {
        return await getBlogHomePage();
      },
      
      
      
  };
  
  export default ModuleBlog;