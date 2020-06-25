// import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';
import WifiSummaryTable from './WifiSummaryTable';
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
describe('WifiStatusList', () => {
    test('rendering a empty status list', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';

        const { asFragment } = render(<WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} />);

        expect(asFragment()).toMatchSnapshot();
    });

    /*test('rendering a wifi status list', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';

        const { asFragment } = render(<WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} />);

        await waitFor(() => screen.findByText('Test Wifi 4'));
        //expect(await screen.findByText('Test Wifi 4')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });*/
});
