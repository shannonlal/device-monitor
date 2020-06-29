import { selectWifi, setWifiService } from './effects';
import * as actions from './action';
import { WifiActions } from './action';
import { IWifiDetails, IWifiSummary } from '../../../interfaces/models';

const mockDispatch = (action: WifiActions): WifiActions => {
    return action;
};

describe('Select Wifi Effects', () => {
    it('should select wifi successfully', async () => {
        const ssid = 'Home Wifi';

        const mockWifiDetails: IWifiDetails = {
            ssid: ssid,
            signalStrength: 1,
            security: 'None',
        };
        const successAction: actions.IActionSelectedWifiSuccess = {
            type: actions.SELECTED_WIFI_SUCCESS,
            wifiDetails: mockWifiDetails,
        };

        const mockWifiService = {
            getSelectedWifiDetails: (ssid: string): Promise<IWifiDetails> => {
                const mockWifiDetails: IWifiDetails = {
                    ssid: ssid,
                    signalStrength: 1,
                    security: 'None',
                };

                return Promise.resolve(mockWifiDetails);
            },
            getAvailableWifiNetworks: (): Promise<IWifiSummary[]> => {
                return Promise.reject('Should not have been');
            },

            setDriverFactory: (): void => {},
            getDriverFactory: (): void => {},
        };

        try {
            setWifiService(mockWifiService);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dispatchEffect: any = selectWifi(ssid);
            const finalAction = await dispatchEffect(mockDispatch);

            expect(finalAction.type).toEqual(successAction.type);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });

    it('should fail selecting wifi successfully', async () => {
        const ssid = 'Home Wifi';
        const errorMessage = `No Wifi Details for found ${ssid}`;

        const faileAction: actions.IActionSelectedWifiFail = {
            type: actions.SELECTED_WIFI_FAIL,
            errorMessage,
        };

        const mockWifiService = {
            getSelectedWifiDetails: (ssid: string): Promise<IWifiDetails> => {
                return Promise.reject(errorMessage);
            },
            getAvailableWifiNetworks: (): Promise<IWifiSummary[]> => {
                return Promise.reject('Should not have been');
            },

            setDriverFactory: (): void => {},
            getDriverFactory: (): void => {},
        };

        try {
            setWifiService(mockWifiService);
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dispatchEffect: any = selectWifi(ssid);
            const finalAction = await dispatchEffect(mockDispatch);

            expect(finalAction.type).toEqual(faileAction.type);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
