import { domain } from "./ApiConst";

export const getRelatedBlog = async (relatedString, numberOfArticles) => {
    try {
        const res = await fetch(`${domain}/getRelatedBlog?relatedString=${relatedString}&topArticales=${numberOfArticles}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get related blogs. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting related blogs:", error.message);
        throw error;
    }
};
