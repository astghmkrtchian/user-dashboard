import { memo, useEffect, useContext, useCallback } from "react";
import { Modal, Form, Input, InputNumber  } from "antd";
import { addUser, editUser } from "../../data/actions";

import { UserContext } from "../../data/appContext/UserContext.js";
import { PopupContext } from "../../data/appContext/PopupContext.js";
import { TableContext } from "../../data/appContext/TableContext.js";

import { addUserApi, editUserApi } from "../../api/users.js";
import { 
    userDefaultData,
    submissionError,
    nameValidationRules,
    emailValidationRules,
    amountValidationRules
} from "../../constants/index.js";

const AddEditForm = () => {
    const [ form ] = Form.useForm();
    const { setIsFormVisible, isFormVisible } = useContext(PopupContext);
    const { setSelectedRow, selectedRow } = useContext(TableContext);
    const { dispatch, setLoading } = useContext(UserContext);    

    const initialValues = selectedRow || userDefaultData;

    useEffect(() => {
        form.setFieldsValue(initialValues);
    }, [initialValues]);

    const hideForm = useCallback(() => {
        setSelectedRow(null);
        setIsFormVisible(false);
    }, []);

    const onSubmit = useCallback(async (values) => {
        try {
            setLoading(true);
            if (selectedRow?.id) {
                const updatedRow = await editUserApi({ ...values, id: selectedRow.id });
                editUser(dispatch, updatedRow);
            } else {
                const newRow = await addUserApi(values);
                addUser(dispatch, newRow);
            }
            hideForm();
            setLoading(false);
        } catch (error) {
            setLoading(false);
            console.error(submissionError)
        }
    }, [selectedRow]);   

    const onFinish = useCallback(async(values) => {
        await onSubmit(values);
        form.resetFields();
    }, [selectedRow]);

    const onOk = useCallback(() => form.submit(), []);
    return (
        <Modal
            onOk={onOk}
            okText="Save"
            onCancel={hideForm}
            cancelText="Cancel"
            open={isFormVisible}
            title="User Data Form"
        >
            <Form 
                form={form}
                layout="vertical"
                onFinish={onFinish}
                initialValues={initialValues}
            >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={nameValidationRules}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={emailValidationRules}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="purchaseAmount"
                    label="Purchase Amount(EUR)"
                    rules={amountValidationRules}
                >
                    <Input  />
                </Form.Item>
            </Form>
        </Modal>
    );
};

export default memo(AddEditForm);
