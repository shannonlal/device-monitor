import { IResponse } from '../interfaces/response/index';
import { IWifiSummary, IWifiDetails } from '../interfaces/models';

export default class WifiService {
    /**
     * The following service will return a list of available wifi 
     * Networks
     * @param auth: IAuthorization
     */
    getWifiNetworks(): Promise<IWifiSummary[]> {

        const wifSummary: IWifiSummary[] = [
            {
                ssid: 'Test Wifi 1',
                signalStrength: 3,
            },
            {
                ssid: 'Test Wifi 4',
                signalStrength: 2,
            },
        ];

        return Promise.resolve(wifSummary);
    }
}
