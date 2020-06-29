import { Dispatch } from 'redux';
import {
    selectWifiStart,
    selectWifiSuccess,
    getAvaialbleWifiStart,
    getAvaialbleWifiFail,
    getAvaialbleWifiSuccess,
    selectWifiFail,
} from './action';
import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';
import WifiService from '../../../services/wifi-service';

let wifiService = new WifiService();

export function setWifiService(service: WifiService): void {
    wifiService = service;
}
/**
 * The following function will get the select Wifi Details
 * based on the SSID
 */
export function selectWifi(ssid: string) {
    return async (dispatch: Dispatch) => {
        dispatch(selectWifiStart(ssid));
        try {
            const wifiDetails: IWifiDetails = await wifiService.getSelectedWifiDetails(ssid);

            return dispatch(selectWifiSuccess(wifiDetails));
        } catch (err) {
            return dispatch(selectWifiFail(err.message));
        }
    };
}

/**
 * The following function will make a call the to Driver Factory
 * to get a list of all the wifi networks
 */
export function getAvalaibleWifiNetworks() {
    return async (dispatch: Dispatch) => {
        dispatch(getAvaialbleWifiStart());
        try {
            const wifiNetworks: IWifiSummary[] = await wifiService.getAvailableWifiNetworks();

            return dispatch(getAvaialbleWifiSuccess(wifiNetworks));
        } catch (err) {
            return dispatch(getAvaialbleWifiFail(err.message));
        }
    };
}
