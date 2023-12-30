import { domain } from "./ApiConst";

export const getCurrentEvent = async (start, end) => {
    try {
        const res = await fetch(`${domain}/getCurrentEvent?startRow=${start}&endRow=${end}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get current event. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting current event:", error.message);
        throw error;
    }
};
