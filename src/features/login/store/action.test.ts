import * as actions from './action';
import { IAuthorization, IUser } from '../../../interfaces/models';

describe('Login Actions', () => {
    it('should create an action to start authorization', () => {
        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '1231241',
        };

        const expectedAction = {
            type: actions.AUTHORIZE_USER_START,
            auth,
        };
        expect(actions.authorizeUserStart(auth)).toEqual(expectedAction);
    });

    it('should create an action to authorize successfully', () => {
        const user: IUser = {
            eMail: 'test@home.com',
            firstName: 'John',
            lastName: 'Smith',
        };

        const expectedAction = {
            type: actions.AUTHORIZE_USER_SUCCESS,
            user,
        };
        expect(actions.authorizeUserSuccess(user)).toEqual(expectedAction);
    });

    it('should create an action to fail authorization ', () => {
        const errorMessage = 'Failed to login user';

        const expectedAction = {
            type: actions.AUTHORIZE_USER_ERROR,
            errorMessage,
        };
        expect(actions.authorizeUserError(errorMessage)).toEqual(expectedAction);
    });
});
