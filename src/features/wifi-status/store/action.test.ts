import * as actions from './action';

describe('Select Wifi Actions', () => {
    it('should create an action to start wifi selection', () => {
        const expectedAction = {
            type: actions.SELECTED_WIFI_START,
            ssid: 'Home Network',
        };
        expect(actions.selectWifiStart('Home Network')).toEqual(expectedAction);
    });

    it('should create an action to get selected wifi successfully', () => {
        const wifiDetails = {
            ssid: 'Home Wifi',
            signalStrength: 3,
            security: 'None',
        };
        const expectedAction = {
            type: actions.SELECTED_WIFI_SUCCESS,
            wifiDetails,
        };

        expect(actions.selectWifiSuccess(wifiDetails)).toEqual(expectedAction);
    });
});
