import { browser } from "$app/environment";
import { writable } from "svelte/store";

export interface ITransaction {
    id?: string;
    name?: string;
    type?: string;
    user_id?: string;
    transaction_id?: string;
    data?: string;
    platform?: string;
    creation_date?: string;
}
const defaultName: string = JSON.stringify({});

const initialValue = browser
    ? window.localStorage.getItem("transaction") ?? defaultName
    : defaultName;

const transaction = writable<ITransaction>(JSON.parse(initialValue));

transaction.subscribe((value) => {
    if (browser) {
        window.localStorage.setItem("transaction", JSON.stringify(value));
    }
});

export default transaction;
