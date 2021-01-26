import React from 'react';
import './Sort.scss';
import {connect} from "react-redux";

// import Dropdown from 'react-dropdown';
// import 'react-dropdown/style.css';

// const options = [
//     'popular', 'resent', 'last'
// ];
// const defaultOption = 'sort by';

const Sort: React.FC = (props: any) => {
    return (
        <div className="sort">
            <div className="sort__title">
                Statistic of your photos
            </div>
            <form className="sort__form">
                <select className="sort__wrapper" name="sort">
                    <option className="sort__option" value="sort by" >sort by</option>
                    <option className="sort__option" value="popular">popular</option>
                    <option className="sort__option" value="resent">resent</option>
                    <option className="sort__option" value="last">last</option>
                </select>
            </form>
        </div>
    )
}

const mapStateToProps = (state: any) => {
    return {
        stateData: state.userNickName.nickName
    }
}

export default connect(mapStateToProps, null)(Sort);