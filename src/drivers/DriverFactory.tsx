import { IDeviceBridge } from '../drivers/interface';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import DeviceWebBridge from './web/DeviceWebBridge';

/**
 * The following functions will operate as a creational factory for generating the
 * appropriate driver bridges based on the environment.
 */

export enum RuntimeEnvironment {
    WEB,
    ANDROID,
    IOS,
}
const WEB_ENV = [RuntimeEnvironment.WEB];
// const MOBILE_ENV = [RuntimeEnvironment.ANDROID, RuntimeEnvironment.IOS];

// Set default
let RUNTIME_ENV = RuntimeEnvironment.WEB;

/**
 *
 * @param env
 */
export const setRuntimeEnvironment = (env: RuntimeEnvironment): void => {
    RUNTIME_ENV = env;
};
/**
 * This function will return the appropriate environemnt that this is operating in
 */
export const getEnvironment = (): RuntimeEnvironment => {
    return RUNTIME_ENV;
};

/**
 * This will return the appropriate device bridge to get the device info
 * @return IDeviceBridge
 */
export const getDeviceBridge = (): IDeviceBridge => {
    const env: RuntimeEnvironment = getEnvironment();

    if (WEB_ENV.indexOf(env) >= 0) {
        return new DeviceWebBridge();
    } else {
        return new DeviceMobileBridge();
    }
};
