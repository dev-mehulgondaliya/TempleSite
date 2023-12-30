import { domain } from "./ApiConst";

export const getTopBlog = async (number) => {
    try {
        const res = await fetch(`${domain}/addComments`, {
            method: 'POST',
            body: JSON.stringify({
                Id: "00000000-0000-0000-0000-000000000000",
                CommentDateTime: "2023-12-28T03:35:10.940Z",
                CommentBy: "string",
                Comment: "string",
                BlogId: "00000000-0000-0000-0000-000000000000"
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });


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
