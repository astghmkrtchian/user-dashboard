export const userDefaultData = { 
    name: "",
    role: "",
    email: "",
};

export const submissionError = "Something went wrong on submission of the form";
export const emailValidationRules = [
    { required: true, message: "Enter the email address" },
    { type: "email", message: "Invalid email address" },
];
export const nameValidationRules = [{ required: true, message: "Type the name here" }];

export const defaultCols = [
    {
        key: "id",
        title: "ID",
        dataIndex: "id",
    },
    {
        key: "name",
        title: "Name",
        dataIndex: "name",
    },
    {
        key: "email",
        title: "Email",
        dataIndex: "email",
    },
    {
        key: "purchaseAmount",
        title: "Purchase Amount(EUR)",
        dataIndex: "purchaseAmount",
    }
];