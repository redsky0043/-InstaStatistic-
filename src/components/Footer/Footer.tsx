import React from 'react';
import Icon from '../Icon/Icon';
import { iconTypes } from "../Icon/Icon";

import './Footer.scss';

export const Footer: React.FC = () => {
    return (
        <div className="footer">
            <div className="container">
                <div className="footer__inner">
                    <div className="footer__title">
                        Developed by Serhii Boiko
                    </div>
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
                    <div className="footer__year">
                        2020
                    </div>
                </div>
            </div>
        </div>
    )
}



































// const mapStateToProps = (state: any) => {
//     return {
//         stateData: state.userNickName.nickName
//     }
// }

// export default connect(mapStateToProps, null)(Sort);