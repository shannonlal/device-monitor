import {IDeviceBridge} from './index';

class DeviceBridgeMock implements IDeviceBridge{
    getDeviceInfo(): Promise<import("../../interfaces/models").IDeviceDetailsModel> {
        throw new Error("Method not implemented.");
    }
    
}

describe('Device Bridge Driver Inteface ', () => {
    test('should verify IDeviceBridge', () => {
        const deviceBridge = new DeviceBridgeMock();
        expect(deviceBridge).toBeDefined();
        expect(deviceBridge.getDeviceInfo).toBeDefined();
    });
});

