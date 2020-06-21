import { loginReducer, initialState, IAuthorizationState } from './reducer';
import * as actions from './action';
import { IAuthorization, IUser } from '../../../interfaces/models';
import { IActionAuthorizeUserStart, IActionAuthorizeUserSuccess } from './action';

describe('Login Reducer', () => {
    it('should return the initial state', () => {
        expect(loginReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the authorized start', () => {
        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '1231241',
        };

        const state: IAuthorizationState = {
            state: 'INIT',
        };
        const startAction: IActionAuthorizeUserStart = {
            type: actions.AUTHORIZE_USER_START,
            auth,
        };

        const updatedState: IAuthorizationState = loginReducer(state, startAction);
        expect(updatedState).toBeDefined();
        const expectedState: IAuthorizationState = {
            state: 'AUTHENTICATING',
            auth,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the authorized success', () => {
        const user: IUser = {
            eMail: 'test@home.com',
            firstName: 'John',
            lastName: 'Smith',
        };

        const state: IAuthorizationState = {
            state: 'INIT',
        };
        const successAction: IActionAuthorizeUserSuccess = {
            type: actions.AUTHORIZE_USER_SUCCESS,
            user,
        };

        const updatedState: IAuthorizationState = loginReducer(state, successAction);
        expect(updatedState).toBeDefined();
        const expectedState: IAuthorizationState = {
            state: 'AUTHENTICATED',
            user,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the authorized fail', () => {
        const errorMessage = 'Failed to login in';

        const state: IAuthorizationState = {
            state: 'INIT',
        };
        const failAction: actions.IActionAuthorizeUserError = {
            type: actions.AUTHORIZE_USER_ERROR,
            errorMessage,
        };

        const updatedState: IAuthorizationState = loginReducer(state, failAction);
        expect(updatedState).toBeDefined();
        const expectedState: IAuthorizationState = {
            state: 'ERROR',
            errorMessage,
        };
        expect(updatedState).toEqual(expectedState);
    });
});
