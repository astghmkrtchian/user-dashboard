import { memo, useEffect, useContext, useMemo } from "react";
import { Table, Spin } from "antd";
import Actions from "../Actions";

import { fetchUser } from "../../api/users";
import { setUsers } from "../../data/actions";
import { UserContext } from "../../data/appContext/UserContext";

import { defaultCols } from "../../constants";
import styles from "./index.module.scss";

const TableData = () => {
    const { data, dispatch, loading, setLoading } = useContext(UserContext);

    useEffect(() => {
        const fetchData = async () => {
            const data = await fetchUser();
            setUsers(dispatch, data);
            setLoading(false);
        };

        fetchData();
    }, [dispatch]);

    const columns = useMemo(() => ([
        ...defaultCols,
        {
            key: "actions",
            title: "Actions",
            dataIndex: "actions",
            render: (_, rowData) => <Actions userData={rowData} />
        },
    ]), []);

    return (
        <Spin spinning={loading} tip="Loading dashboard data...">
            <Table
                columns={columns}
                dataSource={data}
                className={styles.userTable}
                rowKey={(record) => record.id}
            />
        </Spin>
    );
};

export default memo(TableData);
