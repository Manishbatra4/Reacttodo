import { FETCH_TODO, NEW_TODO, REMOVE_TODO, EDIT_TODO } from '../actions/type';

const initialState = {
    items: [],
    item: {}
};

export default function(state = initialState,action){
    switch(action.type){
        case FETCH_TODO:
            return{
                ...state,
                items: action.payload
            };
        case NEW_TODO:
            return {
                ...state,
                item: action.payload
            };
        case REMOVE_TODO:
            return{ items: state.items.filter(({ id }) => id !== action.id) };
        case EDIT_TODO:
            return {
                ...state,
            };
        default:
            return state;
    }
}