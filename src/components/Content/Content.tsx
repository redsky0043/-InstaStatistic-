import React, { useState } from 'react';
import {connect} from 'react-redux';

import './Content.scss';
import { useData } from "../../Hooks/useData/useData";
import Sort from "../Sort/Sort";
import {showUser} from "../../redux/actions/actions";

const Content: React.FC = (props: any) => {
    const [inputValue, setInputValue] = useState('');
    const [nickname, setNickname] = useState('');
    const {instagramData}: any = useData(nickname);
    const {posts}: any = instagramData;

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
        setInputValue(e.target.value);
    }

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
        e.preventDefault();
        setNickname(inputValue);
        props.showUser(inputValue);
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
                { posts
                    ? posts.map((post: any) =>
                        <div className="post" key={post.id}>
                            <img
                                className="post__img"
                                src={post.imageUrl}
                                alt="post"
                            />
                            <p className="post__text">
                                {Math.round(post.likesCount / instagramData.subscribersCount * 100)} % &nbsp;
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

const mapStateToProps = (state: any) => {
    return {
        stateData: state.userNickName.nickName
    }
}

const mapDispatchToProps = {
    showUser
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);