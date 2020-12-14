import {SHOW_USER_PHOTO} from "../types";

const initialState = {
    nickName: '',
}

export default function nickNameReducer (state = initialState, action: any) {
    switch (action.type) {
        case SHOW_USER_PHOTO:
            return { ...state, nickName: action.payload }
        default: return state
    }
}