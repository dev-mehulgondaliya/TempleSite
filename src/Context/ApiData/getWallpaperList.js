import { domain } from "./ApiConst";

export const getWallpaperList = async (start, end) => {
    try {
        const res = await fetch(`${domain}/getWallpaperList?startRow=${start}&endRow=${end}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get wallpaper list. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting wallpaper list:", error.message);
        throw error;
    }
};
