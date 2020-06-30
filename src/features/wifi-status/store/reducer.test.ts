import { wifiReducer, initialState, IWifiState } from './reducer';
import * as actions from './action';
import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';

describe('Wifi Reducer', () => {
    it('should return the initial state', () => {
        expect(wifiReducer(undefined, {})).toEqual(initialState);
    });

    it('should return the get available wifi start', () => {
        const state: IWifiState = {
            state: 'INIT',
        };
        const startAction: actions.IActionGetAvailableWifiStart = {
            type: actions.GET_AVAILABILE_WIFI_START,
        };

        const updatedState: IWifiState = wifiReducer(state, startAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'INIT',
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the available wifi networks success', () => {
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

        const state: IWifiState = {
            state: 'INIT',
        };
        const successAction: actions.IActionGetAvailableWifiSuccess = {
            type: actions.GET_AVAILABILE_WIFI_SUCCESS,
            wifiNetworks: mockWifSummary,
        };

        const updatedState: IWifiState = wifiReducer(state, successAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'RETRIEVED',
            wifiNetworks: mockWifSummary,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the available wifi networks failure', () => {
        const errorMessage = 'Failed to get Wifi networks';

        const state: IWifiState = {
            state: 'INIT',
        };
        const failAction: actions.IActionGetAvailableWifiFail = {
            type: actions.GET_AVAILABILE_WIFI_FAIL,
            errorMessage,
        };

        const updatedState: IWifiState = wifiReducer(state, failAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'ERROR',
            errorMessage,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the selected wifi start', () => {
        const ssid = 'Wifi Home';
        const state: IWifiState = {
            state: 'INIT',
        };
        const startAction: actions.IActionSelectedWifiStart = {
            type: actions.SELECTED_WIFI_START,
            ssid,
        };

        const updatedState: IWifiState = wifiReducer(state, startAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'INIT',
            ssid,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the selected wifi details failure', () => {
        const errorMessage = 'Failed to get Wifi Details';

        const state: IWifiState = {
            state: 'INIT',
        };
        const failAction: actions.IActionSelectedWifiFail = {
            type: actions.SELECTED_WIFI_FAIL,
            errorMessage,
        };

        const updatedState: IWifiState = wifiReducer(state, failAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'ERROR',
            errorMessage,
        };
        expect(updatedState).toEqual(expectedState);
    });

    it('should return the select wifi details success', () => {
        const wifiDetails: IWifiDetails = {
            ssid: 'Home Wifi',
            signalStrength: 3,
            security: 'None',
        };

        const state: IWifiState = {
            state: 'INIT',
        };
        const successAction: actions.IActionSelectedWifiSuccess = {
            type: actions.SELECTED_WIFI_SUCCESS,
            wifiDetails,
        };

        const updatedState: IWifiState = wifiReducer(state, successAction);
        expect(updatedState).toBeDefined();
        const expectedState: IWifiState = {
            state: 'RETRIEVED',
            selectedWifi: wifiDetails,
        };
        expect(updatedState).toEqual(expectedState);
    });
});
