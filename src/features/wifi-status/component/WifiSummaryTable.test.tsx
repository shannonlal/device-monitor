import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import WifiSummaryTable from './WifiSummaryTable';
import { IWifiSummary } from '../../../interfaces/models';

describe('WifiSummaryTable', () => {
    test('rendering a simple wifi summary table', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
        const mockOnClick = jest.fn();
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
                selectWifi={mockOnClick}
            />,
        );

        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering a wifi summary table without wifi summary', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
        const mockOnClick = jest.fn();

        const { asFragment } = render(
            <WifiSummaryTable ssidLabel={ssidLabel} signalStength={signalStrengthLabel} selectWifi={mockOnClick} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering a simple wifi summary table and click on it', async () => {
        const ssidLabel = 'Network Name';
        const signalStrengthLabel = 'Signal Strength';
        const mockOnClick = jest.fn();
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

        const { asFragment, getByText } = render(
            <WifiSummaryTable
                ssidLabel={ssidLabel}
                signalStength={signalStrengthLabel}
                wifiNetworks={mockWifSummary}
                selectWifi={mockOnClick}
            />,
        );

        const field = getByText('Test Wifi 1');
        console.log('test',field.firstChild);
        fireEvent.click(field.firstChild);


        expect(asFragment()).toMatchSnapshot();
    });
});
