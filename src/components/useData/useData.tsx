import { useState, useEffect } from 'react';

export const useData = () => {
    const [info, setInfo] = useState([]);

    useEffect(() => {
        const userInstagram = require("user-instagram");

        userInstagram('edouard_courty')
            .then((response: any) => response.json())
            .then((results: any ) => {
                setInfo(results);
            })
            .catch(console.error);

        // Gets information about a post
        // userInstagram.getPostData('CD9EMe5sHP5')
        //   .then(console.log)
        //   .catch(console.error)
    }, []);

    return {
        info
    };
}