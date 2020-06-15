import { IDeviceDetailsModel } from '../../../interfaces/models';
import { DeviceDetailsActions } from './action';
export interface IDeviceDetailsState {
    state: string; // 'INIT', 'LOADING' | 'LOADED' | 'ERROR',
    deviceDetails?: IDeviceDetailsModel;
    errorMessage?: string;
}

export const initialState: IDeviceDetailsState = {
    state: 'INIT',
    errorMessage: '',
};

export function deviceDetailsReducer(
    state: IDeviceDetailsState = initialState,
    action: DeviceDetailsActions,
): IDeviceDetailsState {
    if (action.type === 'GET_DEVICE_DETAILS_START') {
        return {
            ...state,
            state: 'LOADING',
        };
    }
    if (action.type === 'GET_DEVICE_DETAILS_START_SUCCESS') {
        return {
            ...state,
            state: 'LOADED',
            deviceDetails: action.deviceDetails,
        };
    }
    if (action.type === 'GET_DEVICE_DETAILS_ERROR') {
        return {
            ...state,
            state: 'ERROR',
            errorMessage: action.errorMessage,
        };
    }
    return state;
}
