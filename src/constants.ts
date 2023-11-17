import { environment } from "../src/environment";

export const SERVER_ENDPOINTS = {
    TODOS: `${environment.serverURL}/todos`,
    AUTH: `${environment.serverURL}/auth`,
}