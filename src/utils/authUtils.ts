import authApi from "../api/authApi"

const authUtils = {
    isAuthenticated: async () => {
        const token = localStorage.getItem('token')
        if (!token) return false
        try {
            return false
        } catch {
            return false
        }
    }
}

export default authUtils