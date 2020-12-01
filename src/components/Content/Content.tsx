import React, { useState, useEffect } from 'react';
import './Content.scss';
// import { useData } from "../useData/useData";


export const Content: React.FC = () => {
    // const data = useData();
    const [inputValue, setInputValue] = useState(''); // значение поля Input
    const [nickName, setNickName] = useState(''); // установка никнейма
    const [data, setData] = useState({}); // данные с инстаграма

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setNickName(inputValue);
    }

    const userInstagram = require("user-instagram");

    userInstagram(nickName)
        .then((results: Object) => {
            setData(results);
        })
        .catch(console.error);

    return (
        <div className="content container">
            <p className="content__text">
                nickname
            </p>
            <form
                className="content__form"
                name="user-data"
                onSubmit={handleFormSubmit}
            >
                <input
                    className="content__input"
                    name="nickname"
                    type="text"
                    placeholder="Enter you name"
                    value={inputValue}
                    onChange={handleInputChange}
                    required
                />
                <button className="content__btn">
                    Show info
                </button>
            </form>
        </div>
    )
}