import { domain } from "./ApiConst";

export const getHomeLink = async () => {
    try {
        const res = await fetch(`${domain}/getHomeLink`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get home link. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting home link:", error.message);
        throw error;
    }
};
