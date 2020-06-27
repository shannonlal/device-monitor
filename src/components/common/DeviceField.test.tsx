import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import DeviceField from './DeviceField';

describe('DeviceField', () => {
    test('rendering a simple device field', async () => {
        const value = 'value';
        const label = 'label';

        const { getByText } = render(<DeviceField value={value} label={label} key={`1`} />);

        expect(getByText(value)).toBeInTheDocument();
        expect(getByText(label)).toBeInTheDocument();
    });

    test('rendering a text field to be clicked', async () => {
        const value = 'value';
        const label = 'label';
        let clickedCalled = false;
        const click = () => {
            clickedCalled = true;
        };

        const { getByText } = render(<DeviceField value={value} label={label} key={`1`} clickHandler={click} />);

        expect(getByText(value)).toBeInTheDocument();
        expect(getByText(label)).toBeInTheDocument();

        const inputLabel = getByText(label);
        fireEvent.click(inputLabel);

        expect(clickedCalled).toEqual(true);
    });
});
