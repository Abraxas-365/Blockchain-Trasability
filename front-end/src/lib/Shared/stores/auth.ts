import { browser } from "$app/environment";
import { writable } from "svelte/store";

interface User {
    token: string;
}
const defaultName: string = JSON.stringify({});

const initialValue = browser
    ? window.localStorage.getItem("user") ?? defaultName
    : defaultName;

const user = writable<User>(JSON.parse(initialValue));

user.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("user", JSON.stringify(value));
    }
});

export default user;
