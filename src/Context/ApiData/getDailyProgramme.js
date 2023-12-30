import { domain } from "./ApiConst";

export const getDailyProgramme = async () => {
    try {
        const res = await fetch(`${domain}/getDailyProgramme`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get daily programme. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting daily programme:", error.message);
        throw error;
    }
};
