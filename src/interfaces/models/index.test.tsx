import { IDeviceDetailsModel, IUser, IAuthorization, IWifiSummary, IWifiDetails } from './index';

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

    test('should verify authorization  Model', () => {
        const user: IAuthorization = {
            eMail: 'testUser@help.com',
            password: 'Test123',
        };

        expect(user).toBeDefined();
        expect(user.eMail).toBe('testUser@help.com');
    });

    test('should verify user  Model', () => {
        const user: IUser = {
            eMail: 'testUser@help.com',
            firstName: 'John',
            lastName: 'Smith'
        };

        expect(user).toBeDefined();
        expect(user.eMail).toBe('testUser@help.com');
    });

    test('should verify Wifi Summary Model', () => {
        const wifiSummary: IWifiSummary = {
            signalStrength: 3,
            ssid: 'Shannon Home',
        };

        expect(wifiSummary).toBeDefined();
        expect(wifiSummary.ssid).toBe('Shannon Home');
    });

    test('should verify Wifi Details Model', () => {
        const wifiDetails: IWifiDetails = {
            signalStrength: 3,
            ssid: 'Shannon Home',
            security: 'None',
        };

        expect(wifiDetails).toBeDefined();
        expect(wifiDetails.ssid).toBe('Shannon Home');
    });
});
