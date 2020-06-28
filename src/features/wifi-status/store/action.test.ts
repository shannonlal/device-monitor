import * as actions from './action';
import { IWifiSummary } from '../../../interfaces/models';

describe('Select Wifi Actions', () => {
    it('should create an action to start wifi selection', () => {
        const expectedAction = {
            type: actions.SELECTED_WIFI_START,
            ssid: 'Home Network',
        };
        expect(actions.selectWifiStart('Home Network')).toEqual(expectedAction);
    });

    it('should create an action to fail wifi selection', () => {
        const expectedAction = {
            type: actions.SELECTED_WIFI_FAIL,
            errorMessage: 'SSID Not Found',
        };
        expect(actions.selectWifiFail('SSID Not Found')).toEqual(expectedAction);
    });

    it('should create an action to get selected wifi successfully', () => {
        const wifiDetails = {
            ssid: 'Home Wifi',
            signalStrength: 3,
            security: 'None',
        };
        const expectedAction = {
            type: actions.SELECTED_WIFI_SUCCESS,
            wifiDetails,
        };

        expect(actions.selectWifiSuccess(wifiDetails)).toEqual(expectedAction);
    });
});

describe('Get Available Wifi Actions', () => {
    it('should create an action to start get available wifi', () => {
        const expectedAction = {
            type: actions.GET_AVAILABILE_WIFI_START,
        };
        expect(actions.getAvaialbleWifiStart()).toEqual(expectedAction);
    });

    it('should create an action to fail get available wifi', () => {
        const expectedAction = {
            type: actions.GET_AVAILABILE_WIFI_FAIL,
            errorMessage: 'No Networks Found',
        };
        expect(actions.getAvaialbleWifiFail('No Networks Found')).toEqual(expectedAction);
    });

    it('should create an action to get selected wifi successfully', () => {
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
        const expectedAction = {
            type: actions.GET_AVAILABILE_WIFI_SUCCESS,
            wifiNetworks: mockWifSummary,
        };

        expect(actions.getAvaialbleWifiSuccess(mockWifSummary)).toEqual(expectedAction);
    });
});
