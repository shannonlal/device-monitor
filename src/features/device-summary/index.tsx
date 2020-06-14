import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import DeviceDetails from './DeviceDetails';
import {IDeviceDetailsModel} from '../../interfaces/models';
import {getDeviceBridge} from '../../drivers/DriverFactory';

const INITIAL_STATE = {
    headerLabel: "",
    headerField: ""
};

type DeviceSummaryProps = {};
type DeviceSummaryState = {
    headerLabel: string;
    headerField: string;
    deviceDetails?: IDeviceDetailsModel;
};

/**
 * Will get the device data
 * @return
 */
const getDeviceData = async ():Promise<IDeviceDetailsModel> => {
    const deviceDetails: IDeviceDetailsModel = await getDeviceBridge().getDeviceInfo();

    return deviceDetails;
};


class DeviceSummary extends Component<DeviceSummaryProps,DeviceSummaryState> {
    // state: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE};
    }

    async componentDidMount(){
        const deviceDetails:IDeviceDetailsModel = await getDeviceData();
        this.setState({
            deviceDetails:deviceDetails
        })
    }

    render() {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Device Summary</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <DeviceDetails headerField={this.state.headerLabel} headerLabel={this.state.headerField} deviceDetails={this.state.deviceDetails}/>
                </IonContent>
            </IonPage>
        );
    }
}

export default DeviceSummary;
