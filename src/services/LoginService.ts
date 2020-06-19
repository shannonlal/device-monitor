import { IResponse } from '../interfaces/response/index';
import { IUser, IAuthorization } from '../interfaces/models';

export default class LoginService {
    /**
     * The following service will perform the login service
     * @param auth: IAuthorization
     */
    login(auth: IAuthorization): Promise<IResponse<IUser>> {
        if (auth && auth.eMail === 'user' && auth.password === '12345') {
            const response: IResponse<IUser> = {
                content: {
                    eMail: auth.eMail,
                    firstName: 'John',
                    lastName: 'Smith',
                },
                httpStatus: 200,
            };

            return Promise.resolve(response);
        } else {
            const response: IResponse<IUser> = {
                httpStatus: 403,
                errorMessage: 'User Not Authorized',
            };

            return Promise.resolve(response);
        }
    }
}
