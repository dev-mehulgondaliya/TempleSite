import { domain } from "./ApiConst";

export const getAllRingTone = async () => {
    try {
        const res = await fetch(`${domain}/getAllRingTone`);
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get banner details. Status: ${res.status}`);
        }
    } catch (error) {
        console.error("Error getting all ringtones:", error.message);
        throw error;
    }
};
