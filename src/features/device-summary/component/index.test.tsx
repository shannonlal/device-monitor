import React from 'react';
import { render, wait } from '@testing-library/react';
import DeviceSummary from './index';

describe('DeviceSummary', () => {
    test('rendering Device Summary with no data', async () => {
        const { asFragment } = render(<DeviceSummary />);
        expect(asFragment()).toMatchSnapshot();
    }); 

    test('rendering Device Summary with mock response', async () => {

        const { asFragment, getByText } = render(<DeviceSummary />);

        await wait( () => getByText("Macintosh") );
        expect(asFragment()).toMatchSnapshot();
    }); 
});