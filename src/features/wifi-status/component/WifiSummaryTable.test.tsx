import React from 'react';
import { render } from '@testing-library/react';
import WifiSummaryTable from './WifiSummaryTable';
import { IWifiSummary } from '../../../interfaces/models';

describe('WifiSummaryTable', () => {
    test('rendering a simple wifi summary table', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
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

        const { asFragment } = render(
            <WifiSummaryTable
                ssidLabel={ssidLabel}
                signalStength={signalStrengthLabel}
                wifiNetworks={mockWifSummary}
            />,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering a wifi summary table without wifi summary', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';

        const { asFragment } = render(<WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} />);
        expect(asFragment()).toMatchSnapshot();
    });
});
