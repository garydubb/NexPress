import Container from "@/components/themes/Common/Container";
import NexPressFooter from "@/components/themes/Common/Footer/Footer.component";
import NexPressNavbar from "@/components/themes/Common/Header/NavBar.component";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";
import HeroPost from "../components/hero-post";
import MoreStories from "../components/more-stories";

// Import the NodeByUri query here

export default function NPBlogHomePage() {
    const { content } = useAppContext();
    const [heroPost, setHeroPost] = useState(null);
    const [morePosts, setMorePosts] = useState(null);

    useEffect(() => {
        if (content) {
            const heroPost = content[0]?.node;
            setHeroPost(heroPost);

            const morePosts = content?.slice(1);

            setMorePosts(morePosts);
        }
    }, [content]);
    return (
        <>
            <NexPressNavbar />
            <Container>
                {heroPost && (
                    <HeroPost
                        title={heroPost.title}
                        coverImage={heroPost.featuredImage}
                        date={heroPost.date}
                        author={heroPost.author}
                        slug={heroPost.slug}
                        excerpt={heroPost.excerpt}
                    />
                )}
                {morePosts?.length > 0 && <MoreStories posts={morePosts} />}
            </Container>

            <NexPressFooter />
        </>
    );
}
