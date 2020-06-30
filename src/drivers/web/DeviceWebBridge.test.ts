import DeviceWebBridge from './DeviceWebBridge';

describe('DeviceWebBridge', () => {
    test('should verify it exists', () => {
        expect(DeviceWebBridge).toBeDefined();
    });

    test('Should create Device Web Bridget', () => {
        const deviceBridge = new DeviceWebBridge();

        expect(deviceBridge).toBeDefined();
    });

    test('Should get device info', async () => {
        const deviceBridge = new DeviceWebBridge();

        expect(deviceBridge).toBeDefined();

        try {
            const dInfo = await deviceBridge.getDeviceInfo();
            expect(dInfo).toBeDefined();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
