import {SHOW_USER_PHOTO} from "../types";

export const showUser = (nickName: any) => {
    return {
        type: SHOW_USER_PHOTO,
        payload: nickName,
    }
}