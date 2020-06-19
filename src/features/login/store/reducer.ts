import { IUser, IAuthorization } from '../../../interfaces/models';
import { AuthorizeUserActions } from './action';
export interface IAuthorizationState {
    state: string; // 'INIT', 'AUTHENTICATING' | 'AUTHENTICATED' | 'ERROR',
    auth?: IAuthorization;
    user?: IUser;
    errorMessage?: string;
}

export const initialState: IAuthorizationState = {
    state: 'INIT',
    errorMessage: '',
};

export function loginReducer(
    state: IAuthorizationState = initialState,
    action: AuthorizeUserActions,
): IAuthorizationState {
    if (action.type === 'AUTHORIZE_USER_START') {
        return {
            ...state,
            state: 'AUTHENTICATING',
            auth: action.auth,
        };
    }
    if (action.type === 'AUTHORIZE_USER_SUCCESS') {
        return {
            ...state,
            state: 'AUTHENTICATED',
            user: action.user,
        };
    }
    if (action.type === 'AUTHORIZE_USER_ERROR') {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage,
        };
    }
    return state;
}
