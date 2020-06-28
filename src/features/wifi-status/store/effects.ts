import { Dispatch } from 'redux';
import {
    selectWifiStart,
    selectWifiSuccess,
    getAvaialbleWifiStart,
    getAvaialbleWifiFail,
    getAvaialbleWifiSuccess,
    selectWifiFail,
} from './action';
import { IWifiBridge } from '../../../drivers/interface';
import * as DriverFactory from '../../../drivers/DriverFactory';
import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';

/**
 * The following function will get the select Wifi Details
 * based on the SSID
 */
export function selectWifi(ssid: string) {
    return async (dispatch: Dispatch) => {
        dispatch(selectWifiStart(ssid));
        try {
            const wifiBridge: IWifiBridge = DriverFactory.getWifiBridge();

            const wifiDetails: IWifiDetails = await wifiBridge.getWifiDetails(ssid);

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
            const wifiBridge: IWifiBridge = DriverFactory.getWifiBridge();

            const wifiNetworks: IWifiSummary[] = await wifiBridge.getWifiNetworks();

            return dispatch(getAvaialbleWifiSuccess(wifiNetworks));
        } catch (err) {
            return dispatch(getAvaialbleWifiFail(err.message));
        }
    };
}
