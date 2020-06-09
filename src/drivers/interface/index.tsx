import DeviceDetailsModel from '../../models/DeviceDetailsModel';

export interface IDeviceBridge {
    getDeviceInfo(): Promise<DeviceDetailsModel>;
}


