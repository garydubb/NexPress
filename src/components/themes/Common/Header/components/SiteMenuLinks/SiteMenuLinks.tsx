import Link from "@/components/Atoms/Link";
import { useAppContext } from "@/utils/context/AuthProvider";
import { Fragment } from "react";

export default function SiteMenuLinks() {
    const { menus } = useAppContext();

    return (
        <>
            {menus &&
                Array.isArray(menus["PRIMARY"]) &&
                menus["PRIMARY"].map((item, index) => (
                    <Fragment key={index}>
                        <Link
                            href={item.uri}
                            className="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800"
                        >
                            {item.label}
                        </Link>
                    </Fragment>
                ))}
        </>
    );
}
