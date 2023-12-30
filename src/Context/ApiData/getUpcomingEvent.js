import { domain } from "./ApiConst";

export const getUpcomingEvent = async (start, end) => {
    try {
        const res = await fetch(`${domain}/getUpcomingEvent?startRow=${start}&endRow=${end}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get upcoming events. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting upcoming events:", error.message);
        throw error;
    }
};
