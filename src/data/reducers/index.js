
import { ADD_USER, EDIT_USER, DELETE_USER, SET_USERS } from "../actions";

const userReducer = (state = [], action) => {
    switch (action.type) {
        case SET_USERS: 
            return action.payload;
        case ADD_USER:
            return [...state, action.payload];
        case EDIT_USER:
            return state.map((entry) => entry.id !== action.payload.id ? entry : action.payload);
        case DELETE_USER:
            return state.filter((entry) => entry.id !== action.payload);
    
        default:
            return state;
    }
};

export default userReducer;