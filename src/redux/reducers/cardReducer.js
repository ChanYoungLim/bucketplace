import {
    ONLY_FAVORITE_ON,
    ONLY_FAVORITE_OFF
} from '../actionTypes';

const initialState = {
    onlyFavorite: false,
}

const cards = (state = initialState, action) => {
    switch (action.type){
        case ONLY_FAVORITE_ON:
            return {
                ...state,
                onlyFavorite: true
            };
        case ONLY_FAVORITE_OFF:
            return {
                ...state,
                onlyFavorite: false
            };    
        default:
            return state;
    }
};

export default cards;