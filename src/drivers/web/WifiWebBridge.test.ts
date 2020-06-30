import { IWifiDetails, IWifiSummary } from '../../interfaces/models';

import WifiWebBridge from './WifiWebBridge';

describe('WifiWebBridge', () => {
    test('should verify it exists', () => {
        expect(WifiWebBridge).toBeDefined();
    });

    test('Should create Wifi Mobile Bridget', () => {
        const wifiBridge = new WifiWebBridge();

        expect(wifiBridge).toBeDefined();
    });

    test('Should get Wifi Summary ', async () => {
        const wifiBridge = new WifiWebBridge();

        expect(wifiBridge).toBeDefined();

        try {
            const wifi: IWifiSummary[] = await wifiBridge.getWifiNetworks();
            expect(wifi).toBeDefined();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    test('Should get Wifi Summary ', async () => {
        const wifiBridge = new WifiWebBridge();

        expect(wifiBridge).toBeDefined();

        try {
            const wifiDetails: IWifiDetails = await wifiBridge.getWifiDetails('Test Wifi 1');
            expect(wifiDetails).toBeDefined();
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
