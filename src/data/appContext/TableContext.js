import { createContext, useState } from 'react';

const TableContext = createContext(null);

const TableProvider = ({ children }) => {
    const [selectedRow, setSelectedRow] = useState(null);

    return (
        <TableContext.Provider value={{ selectedRow, setSelectedRow }}>
            {children}
        </TableContext.Provider>
    );
};

export { TableProvider, TableContext };
