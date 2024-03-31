import OrderRecievedPage from "@/components/themes/nexPressShop/OrderRecieved";
import ModuleCheckout from "@/utils/Process/Checkout";
import { useAppContext } from "@/utils/context/AuthProvider";
import { GetStaticProps } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function Index(props: any) {
    const { setMenus, setSeo, setSettings, setContent } = useAppContext();
    const router = useRouter();

    useEffect(() => {
        const removeTemporaryCheckoutData = () => {
            localStorage.removeItem("orderDetails");
        };

        router.events.on("routeChangeStart", removeTemporaryCheckoutData);

        return () => {
            router.events.off("routeChangeStart", removeTemporaryCheckoutData);
        };
    }, []);

    useEffect(() => {
        const { error, page } = props;

        if (props && page) {
            setMenus(page.menus);
            setSeo(page.seo);
            setSettings(page.settings);
            setContent(page.content);
        }
    }, [props]);
    
    return <OrderRecievedPage />;
}

export const getStaticProps: GetStaticProps = async () => {
    return await ModuleCheckout.getStaticProps();
};
