import { environment } from '../src/environment';

export const SERVER_ENDPOINTS = {
    TODOS: `${environment.serverURL}/todos`,
    LOGIN: `${environment.serverURL}/login`,
    USERS: `${environment.serverURL}/users`,
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