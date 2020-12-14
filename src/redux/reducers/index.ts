import { combineReducers } from "redux";
import nickNameReducer from './nickNameReducer';

const rootReducer = combineReducers({
    userNickName: nickNameReducer
})

export default rootReducer;