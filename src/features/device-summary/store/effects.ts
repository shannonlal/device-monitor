import { Dispatch } from 'redux';
import { getDeviceDetailsStart, getDeviceDetailsSuccess, getDeviceDetailsError } from './action';
import { IDeviceDetailsModel } from '../../../interfaces/models';
import { getDeviceBridge } from '../../../drivers/DriverFactory';

/**
 * Will get the device data
 * @return
 */
const getDeviceData = async (): Promise<IDeviceDetailsModel> => {
    const deviceDetails: IDeviceDetailsModel = await getDeviceBridge().getDeviceInfo();

    return deviceDetails;
};

/**
 *
 */
export function getDeviceDetails() {
    return async (dispatch: Dispatch) => {
        dispatch(getDeviceDetailsStart());
        try {
            const deviceDetails: IDeviceDetailsModel = await getDeviceData();
            return dispatch(getDeviceDetailsSuccess(deviceDetails));
        } catch (err) {
            return dispatch(getDeviceDetailsError(err.message));
        }
    };
}
