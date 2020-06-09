import { IDeviceBridge } from '../drivers/interface';
import DeviceMobileBridge from './mobile/DeviceMobileBridge';
import DeviceWebBridge from './web/DeviceWebBridge';

/**
 * The following functions will operate as a creational factory for generating the
 * appropriate driver bridges based on the environment.
 */
const TEST = true;
enum RuntimeEnvironment {
    WEB,
    ANDROID,
    IOS,
}
const WEB_ENV = [RuntimeEnvironment.WEB];
// const MOBILE_ENV = [RuntimeEnvironment.ANDROID, RuntimeEnvironment.IOS];

/**
 * This function will return the appropriate environemnt that this is operating in
 */
const getEnvironment = (): RuntimeEnvironment => {
    if (TEST) {
        return RuntimeEnvironment.WEB;
    } else {
        return RuntimeEnvironment.ANDROID;
    }
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
