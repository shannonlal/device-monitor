import {IDeviceBridge} from '../interface';
import DeviceDetailsModel from '../../models/DeviceDetailsModel';
import { Plugins } from '@capacitor/core';
const { Device } = Plugins;

/**
 * The following class is a mobile implementation of the device bridge
 * which will return device details about
 * 
 * @author shannonlal
 */
export default class DeviceMobileBridge implements IDeviceBridge {

    /**
     * 
     */
    async getDeviceInfo(): Promise<DeviceDetailsModel>{
        return await Device.getInfo()
    }
}


