import { memo, useCallback, useContext } from "react";
import { Button, Popconfirm } from "antd";
import { deleteUserApi } from "../../api/users";

import { PopupContext } from "../../data/appContext/PopupContext";
import { TableContext } from "../../data/appContext/TableContext";
import { UserContext } from "../../data/appContext/UserContext";
import { deleteUser } from "../../data/actions";
import styles from "./index.module.scss";

const Actions = ({ userData }) => {
    const { setSelectedRow } = useContext(TableContext);
    const { setIsFormVisible } = useContext(PopupContext);
    const { dispatch, setLoading } = useContext(UserContext);

    const editEntry = useCallback(() => {
        setSelectedRow(userData);
        setIsFormVisible(true);
    }, [userData]);

    const deleteEntry = useCallback(async () => {
        setLoading(true);
        const deleted = await deleteUserApi(userData.id);
        if (deleted) {
            deleteUser(dispatch, userData.id);
        }
        setLoading(false);
    }, [userData]);

    return (
        <div className={styles.actionsContainer}>
            <Button
                type="primary"
                children="Edit"
                onClick={editEntry}
            />
            <Popconfirm
                okText="Yes"
                cancelText="No"
                title="Delete?"
                onConfirm={deleteEntry}
            >
                <Button 
                    type="danger"
                    children="Delete"
                    className={styles.dangerButton}                />
            </Popconfirm>
        </div>
    );
};

export default memo(Actions);
