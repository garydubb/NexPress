import { parseISO, format } from "date-fns";

export default function Date({ dateString }: any) {
    const date = parseISO(dateString);
    return (
        <>
            {date && <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>}
        </>
    );
}
