import { GetStaticProps } from "next";
import ModuleBlog from "@/utils/Process/Blog";
import NPBlogHomePage from "@/components/themes/Blog/HomePage/HomePage";
import { useEffect } from "react";
import { useAppContext } from "@/utils/context/AuthProvider";

export default function BlogIndexPage(props: any) {
    const { setMenus, setSeo, setSettings, setContent } = useAppContext();
    useEffect(() => {
      const { page } = props;
  
      if (props && page) {
        setMenus(page.menus);
        setSeo(page.seo);
        setSettings(page.settings);
        setContent(page.content);
      }
    }, [props]);

    if (!props) return null;
    return <NPBlogHomePage />;
}

export const getStaticProps: GetStaticProps = async () => {
    return ModuleBlog.getBlogHomePage();
};
