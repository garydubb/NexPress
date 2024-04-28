import { useAppContext } from "@/utils/context/AuthProvider";
import { useEffect, useState } from "react";

export default function TopBar() {
    const { settings } = useAppContext();
    const [title, setTitle] = useState(null);

    useEffect(() => {
        if (settings && settings.nexpress) {
            const { headerText } = settings.nexpress;
            setTitle(headerText);
        }
    }, []);

    return (
        <>
            {title && (
                <header className="relative bg-white">
                    <p className="flex h-10 items-center justify-center bg-indigo-600 px-4 text-sm font-medium text-white sm:px-6 lg:px-8">
                        {title}
                    </p>
                </header>
            )}
        </>
    );
}
