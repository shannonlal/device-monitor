import { IDeviceBridge } from '../interface';
import { IDeviceDetailsModel } from '../../interfaces/models';

/**
 * The following class is a web implementation of the device bridge
 * which will return fixed data since this is not supported via the web
 *
 * @author shannonlal
 */
export default class DeviceWebBridge implements IDeviceBridge {
    /**
     *
     */
    async getDeviceInfo(): Promise<IDeviceDetailsModel> {
        return new Promise((resolve) => {
            resolve({
                appBuild: '',
                appVersion: '',
                isVirtual: false,
                manufacturer: 'Google Inc.',
                model: 'Macintosh',
                operatingSystem: 'mac',
                osVersion: '10.15.4',
                platform: 'web',
                uuid: '775d1a10-8077-4056-91bb-ff67217af06a',
                diskFree: 1110000,
                memUsed: 12211111,
                diskTotal: 1212121,
            });
        });
    }
}
