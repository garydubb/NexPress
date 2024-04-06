import { useAppContext } from "@/utils/context/AuthProvider";
import styles from "./post-body.module.css";
import { useEffect, useState } from "react";

export default function PostBody() {
    const { content } = useAppContext();
    const [data, setData] = useState(null);

    useEffect(() => {
        if (content) {
            setData(content);
        }
    }, [content]);

    if (!data || !data.content) return null;
    return (
        <div className="max-w-2xl mx-auto">
            <div
                className={styles.content}
                dangerouslySetInnerHTML={{ __html: data.content }}
            />
        </div>
    );
}