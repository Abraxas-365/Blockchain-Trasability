import { browser } from "$app/environment";
import { goto } from "$app/navigation";
import publicRoutes from "$lib/Shared/data/publicRoutes.json";


export const validateUser = async () => {
    try {

        const defaultName: string = JSON.stringify({});
        const userString = browser
            ? window.localStorage.getItem("user") ?? defaultName
            : defaultName;
        let user = JSON.parse(userString);

        if (user.token == undefined) {
            // Valid user found

            // Unset the user store
            user.set({});

            // Invalid user found. Grab their current location to match against the publicRoutes list
            let currentLocation = window.location.pathname;

            // This will redirect if the unauthenticated user is on a private route
            if (!publicRoutes.includes(currentLocation)) {
                await goto("/");
                return false;
            }
        } else {
            let currentLocation = window.location.pathname;
            if (publicRoutes.includes(currentLocation)) {
                await goto("/certificationlist");
                return false;
            }
        }
    } catch (error) {
        // User has invalid token, so log them out
        await goto("/");
        return false;
    }
}
