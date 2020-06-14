/* istanbul ignore file */

import {DeviceDetailsModel} from '../../interfaces/models';

export interface IDeviceBridge {
    getDeviceInfo(): Promise<DeviceDetailsModel>;
}


