import React, { useState } from 'react';
import { useData } from "../../Hooks/useData/useData";
import './Content.scss';
import {Sort} from "../Sort/Sort";


export const Content: React.FC = () => {
    const [inputValue, setInputValue] = useState('');
    const [nickname, setNickname] = useState('');
    const userData: any = useData(nickname).instagramData;
    const userPosts: any = userData.posts;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setNickname(inputValue);
    }

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
            <Sort />
            <div className="posts">
                { userPosts
                    ? userPosts.map((post: any) =>
                        <div className="post" key={post.id}>
                            <img
                                className="post__img"
                                src={post.imageUrl}
                                alt="post"
                            />
                            <p className="post__text">
                                {Math.round(post.likesCount / userData.subscribersCount * 100)} % &nbsp;
                                <span className="post__wrap">
                                    (followers/like)
                                </span>
                            </p>
                        </div>
                    )
                    : <p>Your photos could be here ...</p>
                }
            </div>
        </div>
    )
}