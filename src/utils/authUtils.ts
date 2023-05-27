import authApi from "../api/authApi"

const authUtils = {
    isAuthenticated: async () => {
        const token = localStorage.getItem('token')
        if (!token) return false
        try {
            return true
        } catch {
            return false
        }
    }
}

export default authUtils