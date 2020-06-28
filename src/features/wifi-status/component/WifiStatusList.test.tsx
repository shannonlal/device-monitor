// import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, act } from '../../../store/test-utils';
import WifiSummaryTable from './WifiSummaryTable';
import { IWifiSummary, IWifiDetails } from '../../../interfaces/models';
import { IWifiBridge } from '../../../drivers/interface';
// import { IWifiSummary } from '../../../interfaces/models';
// import { getWifiBridge } from '../../../drivers/DriverFactory';

/*const fakeWifiBridge = (): Promise<IWifiSummary[]> => {
    console.log('Calling Fake Wifi Bridge');
    const mockWifSummary: IWifiSummary[] = [
        {
            ssid: 'Test Wifi 4',
            signalStrength: 1,
        },
        {
            ssid: 'Test Wifi 5',
            signalStrength: 2,
        },
    ];
    return Promise.resolve(mockWifSummary);
};

jest.mock('../../../drivers/DriverFactory', () => ({
    ...jest.requireActual('../../../drivers/DriverFactory'),
    getWifiBridge: jest.fn(),
}));

const getWifiBridgeMock = getWifiBridge as jest.Mock;
*/
//const getWifiBridgeMock = getWifiBridge as jest.Mock;

// getWifiBridgeMock.mockImplementation(() => fakeWifiBridge);

//beforeAll(() => {
//    getWifiBridge.mockImplementation(fakeWifiBridge);
//});

/*const wifiBridge: IWifiBridge = {
    getWifiNetworks() {
        console.log('Get Wifi Networks');
        const mockWifSummary: IWifiSummary[] = [
            {
                ssid: 'Test Wifi 1',
                signalStrength: 3,
            },
            {
                ssid: 'Test Wifi 4',
                signalStrength: 2,
            },
        ];
        return Promise.resolve(mockWifSummary);
    },
    getWifiDetails() {
        const mockWifiDetails: IWifiDetails = {
            ssid: 'Home Wifi',
            signalStrength: 3,
            security: 'None',
        };
        return Promise.resolve(mockWifiDetails);
    },
};*/

jest.mock('../../../drivers/DriverFactory', () => ({
    ...jest.requireActual('../../../drivers/DriverFactory'),
    getWifiBridge: {
        getWifiNetworks() {
            console.log('Get Wifi Networks');
            const mockWifSummary: IWifiSummary[] = [
                {
                    ssid: 'Test Wifi 1',
                    signalStrength: 3,
                },
                {
                    ssid: 'Test Wifi 4',
                    signalStrength: 2,
                },
            ];
            return Promise.resolve(mockWifSummary);
        },
        getWifiDetails() {
            const mockWifiDetails: IWifiDetails = {
                ssid: 'Home Wifi',
                signalStrength: 3,
                security: 'None',
            };
            return Promise.resolve(mockWifiDetails);
        },
    },
}));

describe('WifiStatusList', () => {
    test('rendering a empty status list', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
        const mockOnClick = jest.fn();
        const { asFragment } = render(
            <WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} selectWifi={mockOnClick} />,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering a wifi status list', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
        const mockOnClick = jest.fn();

        const { asFragment, findByText } = render(
            <WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} selectWifi={mockOnClick} />,
        );

        //await waitFor(() => screen.findByText('Test Wifi 4'));
        //expect(findByText('Test Wifi 4')).toBeInTheDocument();
        //expect(asFragment()).toMatchSnapshot();
    });
});
