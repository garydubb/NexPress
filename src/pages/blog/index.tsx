import { GetStaticProps } from "next";
import ModuleBlog from "@/utils/Process/Blog";
import NPBlogHomePage from "@/components/themes/Blog/HomePage/HomePage";

export default function BlogIndexPage() {
    return <NPBlogHomePage />;
}

export const getStaticProps: GetStaticProps = async () => {
    return ModuleBlog.getBlogHomePage();
};
