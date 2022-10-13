import { apiUser } from "$lib/Shared/api/apiCalls";
import user from "$lib/Shared/stores/auth";

export async function login(email: string, password: string) {
    console.log("login", email, password);
    const { data } = await apiUser.post('/login', { "email": email, "password": password })
    console.log(data);
    user.set(data)

    const defaultName: string = JSON.stringify({
        token: "",
    });
    // const userData = window.localStorage.getItem("user")
    // console.log(userData.token);
}
