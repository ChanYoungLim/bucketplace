import {ONLY_FAVORITE_ON, ONLY_FAVORITE_OFF} from '../actionTypes';

export const onlyFavoriteOn = dispatch => {
    dispatch({type: ONLY_FAVORITE_ON});
}

export const onlyFavoriteOff = dispatch => {
    dispatch({type: ONLY_FAVORITE_OFF});
}
