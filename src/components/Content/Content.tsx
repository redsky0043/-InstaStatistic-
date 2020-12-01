import * as React from 'react';
import './Content.scss';
// import { useData } from "../useData/useData";
import { useState } from 'react';


export const Content = () => {
    // const data = useData();
    const [userName, setUserName] = useState();

    // const userInstagram = require("user-instagram");

    // userInstagram('edouard_courty')
    //     .then(console.log)
    //     .catch(console.error);

    const handleOnChange = (e: any) => {
        setUserName(e.target.value)
    }

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
                    value={userName}
                    // onChange={e => setUserName(e.target.value)}
                    onChange={handleOnChange}
                    required
                />
                <button className="content__btn">
                    Show info
                </button>
            </form>
        </div>
    )
}