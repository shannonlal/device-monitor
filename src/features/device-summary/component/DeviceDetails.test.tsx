import React from 'react';
import { render } from '@testing-library/react';
import DeviceDetails from './DeviceDetails';
import {IDeviceDetailsModel} from '../../../interfaces/models';

describe('DeviceField', () => {
    test('rendering a simple device field', async () => {
        const headerLabel:string =  "Header";
        const headerField:string =  "Field";
        const deviceDetails:IDeviceDetailsModel = {
            name: "MyPhone",
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
            isVirtual: true
        }

        const { asFragment } = render(<DeviceDetails headerLabel={headerLabel} 
                                        headerField={headerField} 
                                        deviceDetails={deviceDetails} />);

        expect(asFragment()).toMatchSnapshot();
    }); 

    test('rendering a device details with optional field', async () => {
        const headerLabel:string =  "Header";
        const headerField:string =  "Field";
        const deviceDetails:IDeviceDetailsModel = {
            name: "MyPhone",
            appVersion: '1.0.1',
            appBuild: '12.1.1',
            operatingSystem: 'Android',
            osVersion: 'OS',
            platform: 'ios',
            model: 'adadaa',
            manufacturer: 'Samsung',
            uuid: '12313231213123asdsdad',
            isVirtual: true
        }

        const { asFragment } = render(<DeviceDetails headerLabel={headerLabel} 
                                        headerField={headerField} 
                                        deviceDetails={deviceDetails} />);

        expect(asFragment()).toMatchSnapshot();
    }); 

    test('rendering a device details without device information', async () => {
        const headerLabel:string =  "Header";
        const headerField:string =  "Field";

        const { asFragment } = render(<DeviceDetails headerLabel={headerLabel} 
                                        headerField={headerField} />);

        expect(asFragment()).toMatchSnapshot();
    }); 

    test('rendering a device details without device information', async () => {
        const headerLabel:string =  "Header";
        const headerField:string =  "Field";

        const { asFragment } = render(<DeviceDetails headerLabel={headerLabel} 
                                        headerField={headerField} deviceDetails ={undefined}/>);

        expect(asFragment()).toMatchSnapshot();
    }); 
})