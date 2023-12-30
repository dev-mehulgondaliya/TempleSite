import { domain } from "./ApiConst";

export const downloadRingTone = async (name) => {
    try {
        const res = await fetch(`${domain}/downloadRingTone?name=${name}`);
        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get banner details. Status: ${res.status}`);
        }
    } catch (error) {
        console.error("Error downloading ringtone:", error.message);
        throw error;
    }
};
