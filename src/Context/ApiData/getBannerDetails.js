import { domain } from "./ApiConst";

export const getBannerDetails = async () => {
    try {
        const res = await fetch(`${domain}/getBannerDetails`);

        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get banner details. Status: ${res.status}`);
        }
    } catch (error) {
        console.error("Error getting banner details:", error.message);
        throw error;
    }
};
