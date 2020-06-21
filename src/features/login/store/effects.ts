import { Dispatch } from 'redux';
import { authorizeUserStart, authorizeUserSuccess, authorizeUserError  } from './action';
import { IAuthorization, IUser } from '../../../interfaces/models';
import LoginService from '../../../services/login-service';
import { IResponse } from '../../../interfaces/response';

/**
 *
 */
export function authorizeUser(auth: IAuthorization) {
    return async (dispatch: Dispatch) => {
        dispatch(authorizeUserStart(auth));
        try {
            const loginService = new LoginService();
            const response: IResponse<IUser> = await loginService.login(auth);
            if (response.content) {
                const user: IUser = response.content;
                return dispatch(authorizeUserSuccess(user));
            } else {
                return dispatch(authorizeUserError(`Failed Authorization for user ${auth.eMail}`));
            }
        } catch (err) {
            return dispatch(authorizeUserError(err.message));
        }
    };
}
