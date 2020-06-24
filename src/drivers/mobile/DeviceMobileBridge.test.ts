import { IDeviceDetailsModel } from '../../interfaces/models';

jest.mock('@capacitor/core');
import { Plugins } from '@capacitor/core';

import DeviceMobileBridge from './DeviceMobileBridge';

const Device = {
    async getInfo(): Promise<IDeviceDetailsModel> {
        return {
            name: '1234',
            diskFree: 123344,
            appVersion: '1.0',
            appBuild: '1.0.1',
            operatingSystem: 'OS',
            osVersion: '10.1',
            platform: 'ios',
            memUsed: 12314123,
            diskTotal: 123131312,
            model: 'asdfasd',
            manufacturer: 'Samsung',
            uuid: 'efqerwqerqrwqerewwer',
            isVirtual: true,
        };
    },
};

describe('DeviceMobileBridge', () => {
    test('should verify it exists', () => {
        expect(DeviceMobileBridge).toBeDefined();
    });

    test('Should create Device Mobile Bridget', () => {
        const deviceBridge = new DeviceMobileBridge();

        expect(deviceBridge).toBeDefined();
    });

    test('Should get device info', async () => {
        const deviceBridge = new DeviceMobileBridge();

        expect(deviceBridge).toBeDefined();

        try {
            const dInfo = await deviceBridge.getDeviceInfo();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
