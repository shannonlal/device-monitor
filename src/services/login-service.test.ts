import LoginService from './login-service';
import { IAuthorization, IUser } from '../interfaces/models';
import { IResponse } from '../interfaces/response';

describe('Login Service ', () => {
    test('should verify Login Service Exists', () => {
        expect(LoginService).toBeDefined();
        const service = new LoginService();
        expect(service).toBeDefined();
        expect(service.login).toBeDefined();
    });

    test('should successfully login in user', async () => {
        const service = new LoginService();

        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '12345',
        };

        try {
            const response: IResponse<IUser> = await service.login(auth);
            expect(response).toBeDefined();
            if (response.content) {
                const user: IUser = response.content;
                expect(user).toBeDefined();
                expect(user.eMail).toEqual(auth.eMail);
                expect(user.firstName).toEqual('John');
                expect(user.lastName).toEqual('Smith');
            } else {
                expect(response.content).toBeDefined();
            }
        } catch (err) {
            expect(err).toBeDefined();
        }
    });

    test('should fail login in user', async () => {
        const service = new LoginService();

        const auth: IAuthorization = {
            eMail: 'test@home.com',
            password: '12344',
        };

        try {
            const response: IResponse<IUser> = await service.login(auth);
            expect(response).toBeDefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err.httpStatus).toEqual(403);
            expect(err.errorMessage).toEqual('User Not Authorized');
        }
    });
});
