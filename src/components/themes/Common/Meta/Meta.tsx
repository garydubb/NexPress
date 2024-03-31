import Head from "next/head";
import { CMS_NAME, HOME_OG_IMAGE_URL } from "@/constants/index";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";

export default function Meta() {
    const { seo, content } = useAppContext();
    const [meta, setMeta] = useState(null);
    useEffect(() => {
        const meta = {
            title: content?.title || CMS_NAME,
            description: content?.excerpt,
        };
        setMeta(meta);
    }, []);

    if (!meta) return;
    return (
        <Head>
          <link rel="icon" href="/favicon/favicon.ico" sizes="any" />
            <title>{meta.title}</title>
            <meta
                name="description"
                content={meta.description}
                key="desc"
            />
            <meta property="og:title" content={meta.title} />
            <meta
                property="og:description"
                content={meta.description}
            />
        </Head>
    );
}
