import { Dispatch } from 'redux';
import { selectWifiStart, selectWifiSuccess } from './action';

/**
 *
 */
export function selectWifi(ssid: string) {
    return (dispatch: Dispatch) => {
        dispatch(selectWifiStart());

        return dispatch(selectWifiSuccess(ssid));
    };
}
