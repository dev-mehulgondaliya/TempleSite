import { domain } from "./ApiConst";

export const getBlog = async (start, end) => {
    try {
        const res = await fetch(`${domain}/getBlog?startRow=${start}&endRow=${end}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get blog. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting blog:", error.message);
        throw error;
    }
};
