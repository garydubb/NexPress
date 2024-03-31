import Container from "@/components/themes/Common/Container";
import NexPressFooter from "@/components/themes/Common/Footer/Footer.component";
import NexPressNavbar from "@/components/themes/Common/Header/NavBar.component";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";
import PostHeader from "./components/post-header";
import PostBody from "./components/post-body";
import SectionSeparator from "./components/section-separator";

// Import the NodeByUri query here

export default function NPBlogHomePage() {
    const { content } = useAppContext();
    const [data, setData] = useState(null);
    useEffect(() => {
        if (content) {
            setData(content);
        }
    }, [content]);
    if (!data) return;
    return (
        <>
            <NexPressNavbar />
            <Container>
                <article>
                    <PostHeader
                        title={data.title}
                        coverImage={data.featuredImage}
                        date={data.date}
                        author={data.author}
                        categories=""
                    />
                    <PostBody content={data.content} />
                </article>
            </Container>
            <NexPressFooter />
        </>
    );
}
