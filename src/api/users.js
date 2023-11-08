const API_BASE_URL = "http://localhost:4000";
const headers = { "Content-Type": "application/json" };

export const fetchUser = async () => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`);
        if (!response.ok) {
            throw new Error(`Failed to fetch users data (HTTP: ${response.status})`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching users data:", error);
        throw error;
    }
};

export const addUserApi = async (user) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users`, {
            headers,
            method: "POST",
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error(`Failed to add: HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error adding:", error);
        throw error;
    }
};

export const editUserApi = async (user) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${user.id}`, {
            headers,
            method: "PUT",
            body: JSON.stringify(user),
        });
        if (!response.ok) {
            throw new Error(`Failed to edit: HTTP ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error editing:", error);
        throw error; // for higher-level handling
    }
};

export const deleteUserApi = async (id) => {
    try {
        const response = await fetch(`${API_BASE_URL}/users/${id}`, {
            method: "DELETE",
        });
        if (!response.ok) {
            throw new Error(`Failed to delete: HTTP ${response.status}`);
        }
        return true;
    } catch (error) {
        console.error("Error deleting:", error);
        throw error;
    }
};
