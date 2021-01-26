import React from 'react';
import Icon from '../Icon/Icon';
import { iconTypes } from "../Icon/Icon";
import './Header.scss';

export const Header:React.FC = () => {
    return (
        <div className="header">
            <a className="header__logo" href="#" >
                <h3 className="header__text">
                    Insta<span className="header__text-wrapper">Statistic</span>
                </h3>
            </a>
            <ul className="contacts">
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <Icon type={iconTypes.github} />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <Icon type={iconTypes.linkedin} />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <Icon type={iconTypes.instagram} />
                    </a>
                </li>
                <li className="social-item">
                    <a className="social-link" href="#" target="_blank" >
                        <Icon type={iconTypes.facebook} />
                    </a>
                </li>
            </ul>
        </div>
    );
}

