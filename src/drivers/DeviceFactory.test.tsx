import { IDeviceBridge } from '../drivers/interface';
import DeviceWebBridge from './web/DeviceWebBridge';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import { getDeviceBridge } from './DriverFactory';
import { setRuntimeEnvironment, RuntimeEnvironment } from '../common';



//setRuntimeEnvironment
describe('getDeviceBridge', () => {
    test('should verify getDeviceBridge function exists', () => {
        expect(getDeviceBridge).toBeDefined();
    });

    test('should get Device Web Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.WEB);

        const deviceBridge: IDeviceBridge = getDeviceBridge();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge instanceof DeviceWebBridge).toBeTruthy();
    });

    test('should get Device Mobile Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.ANDROID);

        const deviceBridge: IDeviceBridge = getDeviceBridge();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge instanceof DeviceMobileBridge).toBeTruthy();
    });
});
