
import { IResponse } from '../interfaces/response/index';

export default class LoginService {
    // TODO implement to actual service
    /**
     * The following service will perform the login service
     * @param name
     * @param password
     */
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    login(name: string, password: string): Promise<IResponse<boolean>> {
        throw Error('Not Supported');
    }
}
