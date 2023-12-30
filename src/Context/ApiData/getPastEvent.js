import { domain } from "./ApiConst";

export const getPastEvent = async (start, end) => {
    try {
        const res = await fetch(`${domain}/getPastEvent?startRow=${start}&endRow=${end}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get past events. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting past events:", error.message);
        throw error;
    }
};
