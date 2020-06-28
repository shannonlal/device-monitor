import { Action } from 'redux';
import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';

/************** Select Wifi  *****************/
// Actions Constants
export const SELECTED_WIFI_START = 'SELECTED_WIFI_START';
export const SELECTED_WIFI_SUCCESS = 'SELECTED_WIFI_SUCCESS';

// Action Types
export interface IActionSelectedWifiStart extends Action {
    type: 'SELECTED_WIFI_START';
    ssid: string;
}

export interface IActionSelectedWifiSuccess extends Action {
    type: 'SELECTED_WIFI_SUCCESS';
    wifiDetails: IWifiDetails;
}

export type SelectWifiActions = IActionSelectedWifiStart | IActionSelectedWifiSuccess;

// Action Functions
export function selectWifiStart(ssid: string): IActionSelectedWifiStart {
    return {
        type: SELECTED_WIFI_START,
        ssid,
    };
}

export function selectWifiSuccess(wifiDetails: IWifiDetails): IActionSelectedWifiSuccess {
    return {
        type: SELECTED_WIFI_SUCCESS,
        wifiDetails,
    };
}

/************** Get Avaialble  Wifi  *****************/
// Actions Constants
export const GET_AVAILABILE_WIFI_START = 'GET_AVAILABILE_WIFI_START';
export const GET_AVAILABILE_WIFI_SUCCESS = 'GET_AVAILABILE_WIFI_SUCCESS';
export const GET_AVAILABILE_WIFI_FAIL = 'GET_AVAILABILE_WIFI_FAIL';

// Action Types
export interface IActionGetAvailableWifiStart extends Action {
    type: 'GET_AVAILABILE_WIFI_START';
}

export interface IActionGetAvailableWifiSuccess extends Action {
    type: 'GET_AVAILABILE_WIFI_SUCCESS';
    wifiNetworks: IWifiSummary[];
}

export interface IActionGetAvailableWifiFail extends Action {
    type: 'GET_AVAILABILE_WIFI_FAIL';
    errorMessage: string;
}

export type GetAvailableWifiActions =
    | IActionGetAvailableWifiStart
    | IActionGetAvailableWifiSuccess
    | IActionGetAvailableWifiFail;

// Action Functions
export function getAvaialbleWifiStart(): IActionGetAvailableWifiStart {
    return {
        type: GET_AVAILABILE_WIFI_START,
    };
}

export function getAvaialbleWifiSuccess(wifiNetworks: IWifiSummary[]): IActionGetAvailableWifiSuccess {
    return {
        type: GET_AVAILABILE_WIFI_SUCCESS,
        wifiNetworks,
    };
}

export function getAvaialbleWifiFail(errorMessage: string): IActionGetAvailableWifiFail {
    return {
        type: GET_AVAILABILE_WIFI_FAIL,
        errorMessage,
    };
}
