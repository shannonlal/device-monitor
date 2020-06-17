import { IDeviceDetailsModel, IUser } from './index';

describe('Models', () => {
    test('should verify device details Model', () => {
        const deviceDetails: IDeviceDetailsModel = {
            name: 'MyPhone',
            diskFree: 101001,
            appVersion: '1.0.1',
            appBuild: '12.1.1',
            operatingSystem: 'Android',
            osVersion: 'OS',
            platform: 'ios',
            memUsed: 1322,
            diskTotal: 3113131,
            model: 'adadaa',
            manufacturer: 'Samsung',
            uuid: '12313231213123asdsdad',
            isVirtual: true,
        };

        expect(deviceDetails).toBeDefined();
        expect(deviceDetails.name).toBe('MyPhone');
    });

    test('should verify user  Model', () => {
        const user: IUser = {
            userName: 'testUser',
            password: 'Test123',
        };

        expect(user).toBeDefined();
        expect(user.userName).toBe('testUser');
    });
});
