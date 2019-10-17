import {ADD_LIST, INCREASE_PAGE, FETCHING_ON, FETCHING_OFF} from '../actionTypes';

export const addList = (dispatch, cards) => {
    dispatch({type: ADD_LIST, payload: cards});
};

export const increasePage = dispatch => {
    dispatch({type: INCREASE_PAGE});
}

export const fatchingOn = dispatch => {
    dispatch({type: FETCHING_ON});
}

export const fatchingOff = dispatch => {
    dispatch({type: FETCHING_OFF});
}
