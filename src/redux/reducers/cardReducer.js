import {
    ADD_LIST,
    INCREASE_PAGE,
    FETCHING_ON,
    FETCHING_OFF
} from '../actionTypes';
//import { createReducer } from 'redux-starter-kit';

const initialState = {
    page: 1,
    fetching: false,
    cards: [],
}

// export default createReducer(initialState, {
//     [ADD_LIST]: (state, action) => {
//         return {
//             ...state,
//                 cards: state.cards.concat(action.payload)
//         };
//     },
//     [INCREASE_PAGE]: (state, action) => {
//         return {
//             ...state,
//                 page: state.page + 1
//         };
//     },
//     [FETCHING_ON]: (state, action) => {
//         return {
//             ...state,
//             fetching: true
//         }
//     },
//     [FETCHING_OFF]: (state, action) => {
//         return {
//             ...state,
//             fetching: false
//         }
//     },
// });

const cards = (state = initialState, action) => {
    switch (action.type){
        case ADD_LIST:
            return {
                ...state,
                cards: state.cards.concat(action.payload)
            };
        case INCREASE_PAGE:
            return {
                ...state,
                page: state.page + 1
            };
        case FETCHING_ON:
            return {
                ...state,
                fetching: true
            };
        case FETCHING_OFF:
            return {
                ...state,
                fetching: false
            };    
        default:
            return state;
    }
};

export default cards;