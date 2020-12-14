import {useState, useEffect} from 'react';

const userInstagram = require("user-instagram");

export const useData = (nickname: string) => {
    const [instagramData, setInstagramData] = useState(['']);

    useEffect(() => {
        userInstagram(nickname)
            .then((results: any) => {
                setInstagramData(results);
            })
            .catch(console.error);
    }, [nickname])

    return {
        instagramData
    };
}