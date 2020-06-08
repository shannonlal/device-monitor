type DeviceData = {
    label: string;
    value: string;
};

const getDeviceData = (): Array<DeviceData> => {
    return [
        {
            label: 'CPU',
            value: '90%',
        },
        {
            label: 'Battery',
            value: '80%',
        },
        {
            label: 'Make',
            value: 'SAMSUNG',
        },
        {
            label: 'Model',
            value: 'XSFAE',
        },
    ];
};

export { getDeviceData };
