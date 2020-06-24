import React from 'react';
import { render } from '@testing-library/react';
import { createStore } from 'redux';
import { useDispatch, useSelector, Provider } from 'react-redux';
import DeviceSummary from './index';
import { IDeviceDetailsModel } from '../../../interfaces/models';
import { DeviceDetailsActions } from '../store/action';
import { IDeviceDetailsState } from '../store/reducer';
import { combinedReducers } from '../../../store/index';

jest.mock('react-redux', () => ({
    ...jest.requireActual('react-redux'),
    useDispatch: jest.fn(),
    useSelector: jest.fn(),
}));

const useDispatchMock = useDispatch as jest.Mock;

const dispatchResultRecorder = {} as any;
const fakeDispatch = (action: DeviceDetailsActions) => {
    console.log('Calling Fake Dispatch', action.type);
    dispatchResultRecorder[action.type] = action;
};

useDispatchMock.mockImplementation(() => fakeDispatch);

const deviceDetailsModel: IDeviceDetailsModel = {
    name: 'MyPhone',
    appVersion: '1.0.1',
    appBuild: '12.1.1',
    operatingSystem: 'Android',
    osVersion: 'OS',
    platform: 'ios',
    model: 'adadaa',
    manufacturer: 'Samsung',
    uuid: '12313231213123asdsdad',
    isVirtual: true,
};

const deviceDetailsState: IDeviceDetailsState = {
    state: 'LOADED',
    deviceDetails: deviceDetailsModel,
};
const initialState = {
    deviceDetails: deviceDetailsState,
};


const useSelectorMock = useSelector as jest.Mock;
const fakeUseSelector = () => {
    console.log('Returning state object', initialState);
    return initialState;
};
useSelectorMock.mockImplementation(() => fakeUseSelector);

function renderWithProviders(ui, { reduxState } = {}) {
    const store = createStore(combinedReducers, reduxState || initialState);
    return render(<Provider store={store}>{ui}</Provider>);
}
describe('DeviceSummary', () => {
    test('rendering Device Summary with no data', async () => {
        const { asFragment } = render(<DeviceSummary />);
        expect(asFragment()).toMatchSnapshot();
    });

    test('rendering Device Summary with mock response', async () => {
        try {
            const deviceDetailsModel: IDeviceDetailsModel = {
                name: 'MyPhone',
                appVersion: '1.0.1',
                appBuild: '12.1.1',
                operatingSystem: 'Android',
                osVersion: 'OS',
                platform: 'ios',
                model: 'adadaa',
                manufacturer: 'Samsung',
                uuid: '12313231213123asdsdad',
                isVirtual: true,
            };

            const deviceDetailsState: IDeviceDetailsState = {
                state: 'LOADED',
                deviceDetails: deviceDetailsModel,
            };
            const initialState = {
                deviceDetails: deviceDetailsState,
            };

            const { asFragment, getByText } = renderWithProviders(<DeviceSummary />, { initialState });

            // const field = await getByText('Samsung');
            // expect(field).toBeDefined();
            expect(getByText('Samsung')).toBeInTheDocument();
            expect(asFragment()).toMatchSnapshot();
        } catch (err) {
            console.log('ee', err);
            expect(err).toBeUndefined();
        }
    });
});
