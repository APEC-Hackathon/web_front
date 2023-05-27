import authApi from "../api/authApi"

const authUtils = {
    isAuthenticated: async () => {
        return true;
        const token = localStorage.getItem('token')
        if (!token) return false
        try {
            return authApi.verifyToken()
        } catch (error) {
            return false
        }
    }
}

export default authUtils