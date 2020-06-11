/* istanbul ignore file */

import {DeviceDetailsModel} from '../../models/';

export interface IDeviceBridge {
    getDeviceInfo(): Promise<DeviceDetailsModel>;
}


