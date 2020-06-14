

import { Action } from 'redux';
import {IDeviceDetailsModel} from '../../../interfaces/models';

// Actions Constants
export const GET_DEVICE_DETAILS_START = 'GET_DEVICE_DETAILS_START';
export const GET_DEVICE_DETAILS_SUCCESS = 'GET_DEVICE_DETAILS_START_SUCCESS';
export const GET_DEVICE_DETAILS_ERROR = 'GET_DEVICE_DETAILS_ERROR';


// Action Types
export interface IActionGetDeviceDetailsStart extends Action {
    type: 'GET_DEVICE_DETAILS_START'
}
  
export interface IActionGetDeviceDetailsSuccess extends Action {
  type: 'GET_DEVICE_DETAILS_START_SUCCESS',
  deviceDetails: IDeviceDetailsModel
}
  
export interface IActionGetDeviceDetailsError extends Action {
  type: 'GET_DEVICE_DETAILS_ERROR',
  errorMessage: string
}

export type DeviceDetailsActions = IActionGetDeviceDetailsStart | IActionGetDeviceDetailsSuccess | IActionGetDeviceDetailsError;
// Action Functions
export function getDeviceDetailsStart(): IActionGetDeviceDetailsStart {
    return {
      type: GET_DEVICE_DETAILS_START
    };
}

export function getDeviceDetailsSuccess( deviceDetails: IDeviceDetailsModel): IActionGetDeviceDetailsSuccess {
    return {
      type: GET_DEVICE_DETAILS_SUCCESS,
      deviceDetails
    };
};

export function getDeviceDetailsError( errorMessage: string ): IActionGetDeviceDetailsError {
    return {
      type: GET_DEVICE_DETAILS_ERROR,
      errorMessage
    };
};