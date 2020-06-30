import { IDeviceBridge, IWifiBridge } from '../drivers/interface';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import DeviceWebBridge from './web/DeviceWebBridge';
import { RuntimeEnvironment, getRuntimeEnvironment, WEB_ENV } from '../common';
import WifiWebBridge from './web/WifiWebBridge';
import WifiMobileBridge from './mobile/WifiMobileBridge';

/**
 * This will return the appropriate device bridge to get the device info
 * @return IDeviceBridge
 */
export const getDeviceBridge = (): IDeviceBridge => {
    const env: RuntimeEnvironment = getRuntimeEnvironment();

    if (WEB_ENV.indexOf(env) >= 0) {
        return new DeviceWebBridge();
    } else {
        return new DeviceMobileBridge();
    }
};

/**
 * This will return the appropriate wifi bridge to get the wifi info
 * @return IWifiBridge
 */
export const getWifiBridge = (): IWifiBridge => {
    const env: RuntimeEnvironment = getRuntimeEnvironment();

    if (WEB_ENV.indexOf(env) >= 0) {
        return new WifiWebBridge();
    } else {
        return new WifiMobileBridge();
    }
};
