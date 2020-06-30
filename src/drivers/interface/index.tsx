/* istanbul ignore file */

import { IDeviceDetailsModel, IWifiSummary, IWifiDetails } from '../../interfaces/models';

export interface IDeviceBridge {
    getDeviceInfo(): Promise<IDeviceDetailsModel>;
}

export interface IWifiBridge {
    getWifiNetworks(): Promise<Array<IWifiSummary>>;

    getWifiDetails(ssid: string): Promise<IWifiDetails>;
}
