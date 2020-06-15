import React from 'react';
import { render } from '@testing-library/react';
import DeviceField from './DeviceField';

describe('DeviceField', () => {
    test('rendering a simple device field', async () => {
        const value = 'value';
        const label = 'label';

        const { getByText } = render(<DeviceField value={value} label={label} key={`1`} />);

        expect(getByText(value)).toBeInTheDocument();
        expect(getByText(label)).toBeInTheDocument();
    });
});
