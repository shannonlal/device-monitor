import { IDeviceBridge } from '../drivers/interface';
import DeviceWebBridge from './web/DeviceWebBridge';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import { setRuntimeEnvironment, getEnvironment, getDeviceBridge, RuntimeEnvironment } from './DriverFactory';

describe('RuntimeEnvironment', () => {
    test('should verify RuntimeEnvironment enum exists', () => {
        expect(RuntimeEnvironment).toBeDefined();
        expect(RuntimeEnvironment.WEB).toBeDefined();
        expect(RuntimeEnvironment.ANDROID).toBeDefined();
        expect(RuntimeEnvironment.IOS).toBeDefined();
    });
});

describe('setRuntimeEnvironment', () => {
    test('should verify setRuntimeEnvironment function exists', () => {
        expect(setRuntimeEnvironment).toBeDefined();
    });

    test('should verify setRuntimeEnvironment function updates env', () => {
        setRuntimeEnvironment(RuntimeEnvironment.ANDROID);
        const env = getEnvironment();
        expect(env).toEqual(RuntimeEnvironment.ANDROID);
    });
});

describe('getEnvironment', () => {
    test('should verify getEnvironment function exists', () => {
        expect(getEnvironment).toBeDefined();
    });

    test('should verify getEnvironment function returns env', () => {
        setRuntimeEnvironment(RuntimeEnvironment.IOS);
        const env = getEnvironment();
        expect(env).toEqual(RuntimeEnvironment.IOS);
    });
});

//setRuntimeEnvironment
describe('getDeviceBridge', () => {
    test('should verify getDeviceBridge function exists', () => {
        expect(getDeviceBridge).toBeDefined();
    });

    test('should get Device Web Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.WEB);

        const deviceBridge: IDeviceBridge = getDeviceBridge();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge instanceof DeviceWebBridge ).toBeTruthy();
    });


    test('should get Device Mobile Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.ANDROID);

        const deviceBridge: IDeviceBridge = getDeviceBridge();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge instanceof DeviceMobileBridge ).toBeTruthy();
    });
});
