import Avatar from "./avatar";
import Date from "./date";
import CoverImage from "./cover-image";
import PostTitle from "./post-title";
import Categories from "./categories";
import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";

export default function PostHeader() {
    const { content } = useAppContext();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (content) {
            setData(content);
        }
    }, [content]);

    if (!data) return null;
    return (
        <>
            {data.title && <PostTitle>{data.title}</PostTitle>}
            <div className="hidden md:block md:mb-12">
                {data.author && <Avatar author={data.author} />}
            </div>
            <div className="mb-8 md:mb-16 sm:mx-0">
                {data.coverImage && (
                    <CoverImage
                        title={data.title}
                        coverImage={data.coverImage}
                    />
                )}
            </div>
            <div className="max-w-2xl mx-auto">
                <div className="block md:hidden mb-6">
                    {data.author && <Avatar author={data.author} />}
                </div>
                <div className="mb-6 text-lg">
                    {data.date && <Date dateString={data.date} />}
                    {data.categories && (
                        <Categories categories={data.categories} />
                    )}
                </div>
            </div>
        </>
    );
}
