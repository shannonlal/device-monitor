import sinon from 'sinon';
import { authorizeUser } from './effects';
import { Dispatch } from 'redux';
import * as actions from './action';
import { AuthorizeUserActions } from './action';
import LoginService from '../../../services/login-service';

import { IAuthorization, IUser } from '../../../interfaces/models';

const mockDispatch = (action: AuthorizeUserActions): AuthorizeUserActions => {
    return action;
};

describe('Login Effects', () => {
    it('should login successfully', async () => {
        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '12345',
        };

        const user: IUser = {
            eMail: 'test@home.com',
            firstName: 'John',
            lastName: 'Smith',
        };

        const failAction: actions.IActionAuthorizeUserSuccess = {
            type: actions.AUTHORIZE_USER_SUCCESS,
            user,
        };
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dispatchEffect: any = authorizeUser(auth);
            const finalAction = await dispatchEffect(mockDispatch);

            expect(finalAction.type).toEqual(failAction.type);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    it('should fail login due to invalid credentials', async () => {
        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '1231241',
        };

        const errorMessage = 'Failed to login in';
        const failAction: actions.IActionAuthorizeUserError = {
            type: actions.AUTHORIZE_USER_ERROR,
            errorMessage,
        };
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dispatchEffect: any = authorizeUser(auth);
            const finalAction = await dispatchEffect(mockDispatch);

            expect(finalAction.type).toEqual(failAction.type);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
