import React from 'react';
import { render, wait } from '@testing-library/react';
import { DeviceSummary } from './index';
import { IDeviceDetailsModel } from '../../../interfaces/models';

describe('DeviceSummary', () => {
    test('rendering Device Summary with no data', async () => {
        const mockDispatch = (): Promise<any> => {
            return Promise.resolve();
        };
        const { asFragment } = render(
            <DeviceSummary headerLabel={'Label'} headerField={'Field'} dispatch={mockDispatch} />,
        );
        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering Device Summary with mock response', async () => {
        const deviceDetails: IDeviceDetailsModel = {
            name: 'MyPhone',
            diskFree: 101001,
            appVersion: '1.0.1',
            appBuild: '12.1.1',
            operatingSystem: 'Android',
            osVersion: 'OS',
            platform: 'ios',
            memUsed: 1322,
            diskTotal: 3113131,
            model: 'adadaa',
            manufacturer: 'Samsung',
            uuid: '12313231213123asdsdad',
            isVirtual: true,
        };

        const mockDispatch = (): Promise<any> => {
            return Promise.resolve();
        };
        const { asFragment, getByText } = render(
            <DeviceSummary
                headerLabel={'Label'}
                headerField={'Field'}
                dispatch={mockDispatch}
                deviceDetails={deviceDetails}
            />,
        );

        expect(getByText('Samsung')).toBeInTheDocument();
        expect(asFragment()).toMatchSnapshot();
    });
});
