import * as React from 'react';
import './Content.scss';
// import { useData } from "../useData/useData";
import { useState, useEffect } from 'react';


export const Content = () => {
    // const data = useData();
    const [data, setData] = useState();
    
    const userInstagram = require("user-instagram");
    
    userInstagram('edouard_courty')
    .then((response: any) => response.json())
    .then((results: any) => setData(results))
    .catch(console.error);
    
    // console.log(data);

    return (
        <div className="content container">
            <p className="content__text">
                nickname
            </p>
            <form className="content__form" name="user-data">
                <input
                    className="content__input"
                    type="text"
                    placeholder="Enter you name"
                    name="nickname"
                    required
                />
                <button className="content__btn">
                    Show info
                </button>
            </form>
        </div>
    )
}