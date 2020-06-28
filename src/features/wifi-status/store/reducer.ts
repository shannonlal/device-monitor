import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';
import { GetAvailableWifiActions } from './action';
export interface IWifiState {
    state: string; // 'INIT', 'AUTHENTICATING' | 'AUTHENTICATED' | 'ERROR',
    wifiNetworks?: IWifiSummary[];
    errorMessage?: string;
    ssid?: string;
    selectedWifi?: IWifiDetails;
}

export const initialState: IWifiState = {
    state: 'INIT',
    errorMessage: '',
    ssid: '',
};

export function wifiReducer(state: IWifiState = initialState, action: GetAvailableWifiActions): IWifiState {
    if (action.type === 'GET_AVAILABILE_WIFI_START') {
        return {
            ...state,
            state: 'INIT',
        };
    }
    if (action.type === 'GET_AVAILABILE_WIFI_SUCCESS') {
        return {
            ...state,
            state: 'RETRIEVED',
            wifiNetworks: action.wifiNetworks,
        };
    }
    if (action.type === 'GET_AVAILABILE_WIFI_FAIL') {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage,
        };
    }
    return state;
}
