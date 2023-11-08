export const ADD_USER = "ADD_USER";
export const SET_USERS = "SET_USERS";
export const EDIT_USER = "EDIT_USER";
export const DELETE_USER = "DELETE_USER";

export const addUser = (dispatch, user) => {
    dispatch({ type: ADD_USER, payload: user });
};

export const editUser = (dispatch, user) => {
    dispatch({ type: EDIT_USER, payload: user });
};

export const deleteUser = (dispatch, userId) => {
    dispatch({ type: DELETE_USER, payload: userId });
};

export const setUsers = (dispatch, users) => {
    dispatch({ type: SET_USERS, payload: users });
};
