import { IDeviceBridge, IWifiBridge } from '../drivers/interface';
import DeviceWebBridge from './web/DeviceWebBridge';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import { getDeviceBridge, getWifiBridge } from './DriverFactory';
import { setRuntimeEnvironment, RuntimeEnvironment } from '../common';
import WifiWebBridge from './web/WifiWebBridge';
import WifiMobileBridge from './mobile/WifiMobileBridge';

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

describe('getWifiBridge', () => {
    test('should verify getWifiBridge function exists', () => {
        expect(getWifiBridge).toBeDefined();
    });

    test('should get Wifi Web Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.WEB);

        const wifiBridge: IWifiBridge = getWifiBridge();
        expect(wifiBridge).toBeDefined();
        expect(wifiBridge instanceof WifiWebBridge).toBeTruthy();
    });

    test('should get Wifi Mobile Bridge', () => {
        setRuntimeEnvironment(RuntimeEnvironment.ANDROID);

        const wifiBridge: IWifiBridge = getWifiBridge();
        expect(wifiBridge).toBeDefined();
        expect(wifiBridge instanceof WifiMobileBridge).toBeTruthy();
    });
});
