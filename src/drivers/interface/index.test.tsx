import { IDeviceBridge, IWifiBridge } from './index';
import { IDeviceDetailsModel, IWifiSummary, IWifiDetails } from '../../interfaces/models';

class DeviceBridgeMock implements IDeviceBridge {
    getDeviceInfo(): Promise<IDeviceDetailsModel> {
        throw new Error('Method not implemented.');
    }
}

class WifiBridgeMock implements IWifiBridge {
    getWifiNetworks(): Promise<IWifiSummary[]> {
        throw new Error('Method not implemented.');
    }
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    getWifiDetails(ssid: string): Promise<IWifiDetails> {
        throw new Error('Method not implemented.');
    }
}

describe('Device Bridge Driver Inteface', () => {
    test('should verify IDeviceBridge', () => {
        const deviceBridge = new DeviceBridgeMock();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge.getDeviceInfo).toBeDefined();
    });
});

describe('Wifi Bridge Driver Inteface', () => {
    test('should verify IWifiBridge', () => {
        const wifiBridge = new WifiBridgeMock();
        expect(wifiBridge).toBeDefined();
        expect(wifiBridge.getWifiNetworks).toBeDefined();
        expect(wifiBridge.getWifiDetails).toBeDefined();
    });
});
