import { getEnvironment, Environment } from '../common/index';
import { ILoginService } from './index';
import LoginService from './impl/LoginService';
import LoginMockService from './mock/LoginMockService';
/**
 * This will return the appropriate Login Service based on environment
 * @return ILoginService
 */
export const getLoginService = (): ILoginService => {
    const env: Environment = getEnvironment();

    if (env === Environment.PROD) {
        return new LoginService();
    } else {
        return new LoginMockService();
    }
};
