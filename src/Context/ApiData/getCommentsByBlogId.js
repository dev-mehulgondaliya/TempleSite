import { domain } from "./ApiConst";

export const getCommentsByBlogId = async (blogid) => {
    try {
        const res = await fetch(`${domain}/getCommentsByBlogId?BlogId=${blogid}`);

        if (res.ok) {
            const data = await res.json();
            return data;
        }else{
            throw new Error(`Failed to get comments for blog. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting comments for blog:", error.message);
        throw error;
    }
};
