import { domain } from "./ApiConst";

export const getTopBlog = async (number) => {
    try {
        const res = await fetch(`${domain}/getTopBlog?TopNumbers=${number}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get top blogs. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting top blogs:", error.message);
        throw error;
    }
};
