import React from 'react';
import WifiDeviceDetails from './WifiDeviceDetails';
import { render } from '../../../store/test-utils';
import { IWifiState } from '../store/reducer';

describe('Wifi Device Details ', () => {
    it('renders Wifi Device Details without list of devices', () => {
        const initialState = {
            wifi: {
                state: 'INIT',
            },
        };
        const { getByText } = render(<WifiDeviceDetails />, {
            initialState: initialState,
        });
        expect(getByText('Wifi')).toBeInTheDocument();
    });

    it('renders Wifi Device Details when error occurs', () => {
        const initialState = {
            wifi: {
                state: 'ERROR',
            },
        };
        const { getByText } = render(<WifiDeviceDetails />, {
            initialState: initialState,
        });
        expect(getByText('No Details Found on Wifi Network')).toBeInTheDocument();
    });

    it('renders Wifi Device Details with wifi details', () => {

        const wifi: IWifiState = {
            state: 'RETRIEVED',
            ssid: 'Home Wifi',
            selectedWifi: {
                ssid: 'Home Wifi',
                signalStrength: 3,
                security: 'None',
            },
        };

        const initialState = {
            wifi,
        };
        const { getByText } = render(<WifiDeviceDetails />, {
            initialState: initialState,
        });
        expect(getByText('Home Wifi')).toBeInTheDocument();
        expect(getByText('None')).toBeInTheDocument();
    });
});
