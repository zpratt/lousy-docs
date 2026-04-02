import { useEffect, useState } from "react";

const MOBILE_BREAKPOINT = 768;
const MOBILE_QUERY = `(max-width: ${MOBILE_BREAKPOINT}px)`;

export function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState(
        () => window.matchMedia(MOBILE_QUERY).matches,
    );

    useEffect(() => {
        const mql = window.matchMedia(MOBILE_QUERY);
        const handler = (event: { matches: boolean }) => {
            setIsMobile(event.matches);
        };

        mql.addEventListener("change", handler);
        return () => {
            mql.removeEventListener("change", handler);
        };
    }, []);

    return isMobile;
}
