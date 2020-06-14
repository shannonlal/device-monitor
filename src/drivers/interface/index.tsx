/* istanbul ignore file */

import {IDeviceDetailsModel} from '../../interfaces/models';

export interface IDeviceBridge {
    getDeviceInfo(): Promise<IDeviceDetailsModel>;
}


