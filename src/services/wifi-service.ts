import { IWifiSummary, IWifiDetails } from '../interfaces/models';
import { IWifiBridge } from '../drivers/interface';
import * as DriverFactory from '../drivers/DriverFactory';

export default class WifiService {
    driverFactory: any;
    /**
     * The following service will perform the wifi service
     * @return: IWifiSummary[]
     */
    async getAvailableWifiNetworks(): Promise<IWifiSummary[]> {
        try {
            const wifiBridge: IWifiBridge = this.getDriverFactory().getWifiBridge();

            const wifiNetworks: IWifiSummary[] = await wifiBridge.getWifiNetworks();

            return wifiNetworks;
        } catch (err) {
            throw err;
        }
    }

    /**
     * The following service will get the details for the given wifi
     * @param : ssid
     * @return: IWifiDetails[]
     */
    async getSelectedWifiDetails(ssid: string): Promise<IWifiDetails> {
        try {
            const wifiBridge: IWifiBridge = this.getDriverFactory().getWifiBridge();

            const wifiDetails: IWifiDetails = await wifiBridge.getWifiDetails(ssid);

            return wifiDetails;
        } catch (err) {
            throw err;
        }
    }

    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    setDriverFactory(factory: any) {
        this.driverFactory = factory;
    }

    getDriverFactory(): any {
        if (this.driverFactory) return this.driverFactory;

        this.driverFactory = DriverFactory;
        return this.driverFactory;
    }
}
