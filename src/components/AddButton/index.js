import { useContext } from "react";
import { Button } from "antd";
import { PopupContext } from "../../data/appContext/PopupContext";
import { UserContext } from "../../data/appContext/UserContext";

function AddButton() {
    const { loading } = useContext(UserContext);
    const { setIsFormVisible } = useContext(PopupContext);

    const showForm = () => {
        setIsFormVisible(true);
    };

    return (
        <Button
            type="primary"
            onClick={showForm}
            disabled={loading}
            children="Add a new User"
        />
    );
}

export default AddButton;
