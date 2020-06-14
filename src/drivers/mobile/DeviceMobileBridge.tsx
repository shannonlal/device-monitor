import {IDeviceBridge} from '../interface';
import {IDeviceDetailsModel} from '../../interfaces/models';
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
    async getDeviceInfo(): Promise<IDeviceDetailsModel>{
        return await Device.getInfo()
    }
}


