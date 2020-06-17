import { ILoginService } from '../index';
import { IResponse } from '../../interfaces/response/index';

export default class LoginMockService implements ILoginService {
    // TODO implement to actual service
    /**
     * The following service will perform the login service
     * @param name
     * @param password
     */
    login(name: string, password: string): Promise<IResponse<boolean>> {
        if (name === 'user' && password === '12345') {
            const response: IResponse<boolean> = {
                content: true,
                httpStatus: 200,
            };

            return Promise.resolve(response);
        } else {
            const response: IResponse<boolean> = {
                content: false,
                httpStatus: 403,
            };

            return Promise.resolve(response);
        }
    }
}
