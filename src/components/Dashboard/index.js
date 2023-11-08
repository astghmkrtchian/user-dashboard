import { memo } from "react";
import TableData from "../TableData";
import AddButton from "../AddButton";
import AddEditForm from "../AddEditForm";
import { TableProvider } from "../../data/appContext/TableContext";
import styles from "./index.module.scss";

const Dashboard = () => (
    <div className={styles.dashboard}>
        <AddButton />
        <TableProvider>
            <AddEditForm />
            <TableData />
        </TableProvider>
    </div>
)

export default memo(Dashboard);
