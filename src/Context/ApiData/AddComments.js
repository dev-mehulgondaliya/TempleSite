import dayjs from "dayjs";
import { domain } from "./ApiConst";

export const AddCommentsAPI = async (msg, name, id) => {
    const currentTime = dayjs().format('YYYY-MM-DDTHH:mm:ss.SSSZ');

    function generateGUID() {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = (Math.random() * 16) | 0;
            const v = c === 'x' ? r : (r & 0x3) | 0x8;
            return v.toString(16);
        });
    }



    try {
        const res = await fetch(`${domain}/addComments`, {
            method: 'POST',
            body: JSON.stringify({
                Id: generateGUID(),
                CommentDateTime: currentTime,
                CommentBy: name,
                Comment: msg,
                BlogId: id
            }),
            headers: {
                'Content-Type': 'application/json',
            }
        });


        if (res.ok) {
            const data = await res.json();
            return data;
        } else {
            throw new Error(`Failed to get top AddCommentsAPI. Status: ${res.status}`);
        }

    } catch (error) {
        console.error("Error getting top AddCommentsAPI:", error.message);
        throw error;
    }
};
