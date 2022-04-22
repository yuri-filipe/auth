
import axios from "axios"


// export const api = axios.create({ baseURL: "http://localhost:1756" });
export const api = axios.create({ baseURL: "/" });
interface AuthType {
    email: string
    password: string
}
export const auth = async ({ email, password }: AuthType) => {
    try {
        const response = await api.post("/api/login", { email, password })
        let { code, msg } = response.data
        if (response && code === "sucess") {
            return response.data.msg
        }
        else if (response && code === "unauthorized") {
            return code
        }
    } catch (error) {
        return null
    }
}