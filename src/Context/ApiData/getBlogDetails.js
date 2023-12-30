import { domain } from "./ApiConst";

export const getBlogDetails = async (blogid) => {
    try {
        const res = await fetch(`${domain}/getBlogDetails?BlogId=${blogid}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get blog details. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting blog details:", error.message);
        throw error;
    }
};
