import { createContext, useReducer, useState } from "react";
import userReducer from "../reducers";

const UserContext = createContext(null);

const UserProvider = ({ children }) => {
    const [data, dispatch] = useReducer(userReducer, []);
    const [loading, setLoading] = useState(true);

    return (
        <UserContext.Provider value={{ data, dispatch, loading, setLoading }}>
            {children}
        </UserContext.Provider>
    );
};

export { UserProvider, UserContext };
