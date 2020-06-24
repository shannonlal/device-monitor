import { IWifiBridge } from '../interface';
import { IWifiDetails, IWifiSummary } from '../../interfaces/models';

const mockWifSummary: IWifiSummary[] = [
    {
        ssid: 'Test Wifi 1',
        signalStrength: 3,
    },
    {
        ssid: 'Test Wifi 4',
        signalStrength: 2,
    },
];

/**
 * The following class is a mobile implementation of the wifi bridge
 * which will return device details about
 *
 * @author shannonlal
 */

export default class WifiMobileBridge implements IWifiBridge {
    getWifiNetworks(): Promise<IWifiSummary[]> {
        return Promise.resolve(mockWifSummary);
    }
    getWifiDetails(ssid: string): Promise<IWifiDetails> {
        const mockWifi: IWifiSummary | undefined = mockWifSummary.find((wifi) => wifi.ssid === ssid);

        if (mockWifi) {
            const mockWifiDetails: IWifiDetails = { ...mockWifi, security: 'None' };
            return Promise.resolve(mockWifiDetails);
        } else {
            return Promise.reject('Wifi Details Not Found');
        }
    }
}
