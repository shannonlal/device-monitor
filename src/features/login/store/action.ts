import { Action } from 'redux';
import { IAuthorization, IUser } from '../../../interfaces/models';

// Actions Constants
export const AUTHORIZE_USER_START = 'AUTHORIZE_USER_START';
export const AUTHORIZE_USER_SUCCESS = 'AUTHORIZE_USER_SUCCESS';
export const AUTHORIZE_USER_ERROR = 'AUTHORIZE_USER_ERROR';

// Action Types
export interface IActionAuthorizeUserStart extends Action {
    type: 'AUTHORIZE_USER_START';
    auth: IAuthorization;
}

export interface IActionAuthorizeUserSuccess extends Action {
    type: 'AUTHORIZE_USER_SUCCESS';
    user: IUser;
}

export interface IActionAuthorizeUserError extends Action {
    type: 'AUTHORIZE_USER_ERROR';
    errorMessage: string;
}

export type AuthorizeUserActions = IActionAuthorizeUserStart | IActionAuthorizeUserSuccess | IActionAuthorizeUserError;

// Action Functions
export function authorizeUserStart(auth: IAuthorization): IActionAuthorizeUserStart {
    return {
        type: AUTHORIZE_USER_START,
        auth,
    };
}

export function authorizeUserSuccess(user: IUser): IActionAuthorizeUserSuccess {
    return {
        type: AUTHORIZE_USER_SUCCESS,
        user,
    };
}

export function getDeviceDetailsError(errorMessage: string): IActionAuthorizeUserError {
    return {
        type: AUTHORIZE_USER_ERROR,
        errorMessage,
    };
}
