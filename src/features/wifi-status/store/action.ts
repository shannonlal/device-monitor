import { Action } from 'redux';

// Actions Constants
export const SELECTED_WIFI_START = 'SELECTED_WIFI_START';
export const SELECTED_WIFI_SUCCESS = 'SELECTED_WIFI_SUCCESS';

// Action Types
export interface IActionSelectedWifiStart extends Action {
    type: 'SELECTED_WIFI_START';
}

export interface IActionSelectedWifiSuccess extends Action {
    type: 'SELECTED_WIFI_SUCCESS';
    ssid: string;
}

export type SelectWifiActions = IActionSelectedWifiStart | IActionSelectedWifiSuccess;

// Action Functions
export function selectWifiStart(): IActionSelectedWifiStart {
    return {
        type: SELECTED_WIFI_START,
    };
}

export function selectWifiSuccess(ssid: string): IActionSelectedWifiSuccess {
    return {
        type: SELECTED_WIFI_SUCCESS,
        ssid,
    };
}
