import { selectWifi } from './effects';
import * as actions from './action';
import { SelectWifiActions } from './action';

const mockDispatch = (action: SelectWifiActions): SelectWifiActions => {
    return action;
};

describe('Select Wifi Effects', () => {
    it('should select wifi successfully', async () => {
        const ssid = 'Home Wifi';

        const successAction: actions.IActionSelectedWifiSuccess = {
            type: actions.SELECTED_WIFI_SUCCESS,
            ssid,
        };
        try {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const dispatchEffect: any = selectWifi(ssid);
            const finalAction = await dispatchEffect(mockDispatch);

            expect(finalAction.type).toEqual(successAction.type);
        } catch (err) {
            expect(err).toBeUndefined();
        }
    });
});
