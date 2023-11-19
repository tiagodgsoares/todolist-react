import { environment } from "../src/environment";

export const SERVER_ENDPOINTS = {
    TODOS: `${environment.serverURL}/todos`,
    AUTH: `${environment.serverURL}/auth`,
}

export const FILTERS = {
    ALL: 'ALL',
    COMPLETE: 'COMPLETE',
    INCOMPLETE: 'INCOMPLETE',
}

export const ORDERS = {
    DESCRIPTION: 'description',
    CREATED_AT: 'createdAt',
    COMPLETED_AT: 'completedAt',
}