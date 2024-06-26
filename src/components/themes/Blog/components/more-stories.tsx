import { useAppContext } from "@/utils/context/AuthProvider";
import PostPreview from "./post-preview";

//import types
import { useEffect, useState } from "react";

export default function MoreStories() {
    const { content } = useAppContext();
    const [posts, setPosts] = useState(null);
    useEffect(() => {
        if (content) {
            const morePosts = content.length > 0 && content?.slice(1);

            setPosts(morePosts);
        }
    }, [content]);
    
    if (!posts) return null;
    return (
        <section className="mx-auto max-w-2xl py-16 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <h2 className="mb-8 text-6xl md:text-7xl font-bold tracking-tighter leading-tight">
                More Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 lg:gap-x-32 gap-y-20 md:gap-y-32 mb-32">
                {posts?.map(({ node }) => (
                    <PostPreview
                        key={node.slug}
                        title={node.title}
                        coverImage={node.featuredImage}
                        date={node.date}
                        author={node.author}
                        slug={node.slug}
                        excerpt={node.excerpt}
                    />
                ))}
            </div>
        </section>
    );
}
