import { IWifiSummary, IWifiDetails } from '../interfaces/models';
import WifiService from './wifi-service';
describe('Wifi Service', () => {
    test('should verify Wifi Service Exists', () => {
        // eslint-disable-next-line @typescript-eslint/no-var-requires
        const WifiService = require('./wifi-service').default;
        expect(WifiService).toBeDefined();
        const service = new WifiService();
        expect(service).toBeDefined();
        expect(service.getAvailableWifiNetworks).toBeDefined();
        expect(service.getSelectedWifiDetails).toBeDefined();
    });

    test('should successfully get available networks', async () => {
        const mockDriverFactory = {
            getWifiBridge: () => {
                return {
                    getWifiNetworks: () => {
                        const mockWifSummary: IWifiSummary[] = [
                            {
                                ssid: 'Test Wifi 33',
                                signalStrength: 1,
                            },
                            {
                                ssid: 'Test Wifi 44',
                                signalStrength: 1,
                            },
                        ];
                        return Promise.resolve(mockWifSummary);
                    },
                };
            },
        };

        const service = new WifiService();
        service.setDriverFactory(mockDriverFactory);
        try {
            const wifiNetworks: IWifiSummary[] = await service.getAvailableWifiNetworks();
            expect(wifiNetworks).toBeDefined();
            expect(wifiNetworks.length).toEqual(2);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    test('should fail to get available networks', async () => {
        const mockDriverFactory = {
            getWifiBridge: () => {
                return {
                    getWifiNetworks: () => {
                        return Promise.reject('No Wifi Networks Found');
                    },
                };
            },
        };

        const service = new WifiService();
        service.setDriverFactory(mockDriverFactory);
        try {
            const wifiNetworks: IWifiSummary[] = await service.getAvailableWifiNetworks();
            expect(wifiNetworks).toBeUndefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toEqual('No Wifi Networks Found');
        }
    });

    test('should successfully get wifi details', async () => {
        const ssid = 'Home Network';
        const mockDriverFactory = {
            getWifiBridge: () => {
                return {
                    getWifiDetails: (ssid: string) => {
                        const mockWifiDetails: IWifiDetails = {
                            ssid: ssid,
                            signalStrength: 1,
                            security: 'None',
                        };

                        return Promise.resolve(mockWifiDetails);
                    },
                };
            },
        };

        const service = new WifiService();
        service.setDriverFactory(mockDriverFactory);
        try {
            const wifiDetails: IWifiDetails = await service.getSelectedWifiDetails(ssid);
            expect(wifiDetails).toBeDefined();
            expect(wifiDetails.ssid).toEqual(ssid);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    test('should fail to get wifi network Details', async () => {
        const ssid = 'Home Network';
        const mockDriverFactory = {
            getWifiBridge: () => {
                return {
                    getWifiDetails: (ssid: string) => {
                        return Promise.reject(`No Wifi Networks Found ${ssid}`);
                    },
                };
            },
        };

        const service = new WifiService();
        service.setDriverFactory(mockDriverFactory);
        try {
            const wifiDetails: IWifiDetails = await service.getSelectedWifiDetails(ssid);
            expect(wifiDetails).toBeUndefined();
        } catch (err) {
            expect(err).toBeDefined();
            expect(err).toEqual(`No Wifi Networks Found ${ssid}`);
        }
    });
});
