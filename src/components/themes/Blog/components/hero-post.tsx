import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import Link from "next/link";
import StaticLinks from "@/utils/static/links";
import { useEffect, useState } from "react";
import { useAppContext } from "@/utils/context/AuthProvider";

export default function HeroPost() {
    const { content } = useAppContext();
    const [heroPost, setHeroPost] = useState(null);
    useEffect(() => {
        if (content) {
            const heroPost = content && content[0]?.node;
            setHeroPost(heroPost);
        }
    }, [content]);
    if (!heroPost) return null;
    return (
        <section className="mx-auto max-w-2xl py-8 px-4 sm:py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <div className="mb-8 md:mb-16">
                {heroPost.coverImage && (
                    <CoverImage
                        title={heroPost.title}
                        coverImage={heroPost.coverImage}
                        slug={heroPost.slug}
                    />
                )}
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
                <div>
                    <h3 className="mb-4 text-4xl lg:text-6xl leading-tight">
                        <Link
                            href={`${StaticLinks.posts.href}/${heroPost.slug}`}
                            className="hover:underline"
                            dangerouslySetInnerHTML={{ __html: heroPost.title }}
                        ></Link>
                    </h3>
                    <div className="mb-4 md:mb-0 text-lg">
                        <Date dateString={heroPost.date} />
                    </div>
                </div>
                <div>
                    <div
                        className="text-lg leading-relaxed mb-4"
                        dangerouslySetInnerHTML={{ __html: heroPost.excerpt }}
                    />
                    <Avatar author={heroPost.author} />
                </div>
            </div>
        </section>
    );
}
