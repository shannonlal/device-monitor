export interface IDeviceDetailsModel {
    name?: string;
    diskFree?: number;
    appVersion: string;
    appBuild: string;
    operatingSystem: string;
    osVersion: string;
    platform: 'ios' | 'android' | 'electron' | 'web';
    memUsed?: number;
    diskTotal?: number;
    model: string;
    manufacturer: string;
    uuid: string;
    isVirtual: boolean;
};
