import * as actions from './action';

describe('Select Wifi Actions', () => {
    it('should create an action to start wifi selection', () => {
        const expectedAction = {
            type: actions.SELECTED_WIFI_START,
        };
        expect(actions.selectWifiStart()).toEqual(expectedAction);
    });

    it('should create an action to authorize successfully', () => {
        const ssid = 'Home Wifi';

        const expectedAction = {
            type: actions.SELECTED_WIFI_SUCCESS,
            ssid,
        };

        expect(actions.selectWifiSuccess(ssid)).toEqual(expectedAction);
    });
});
