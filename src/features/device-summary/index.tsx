import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import DeviceDetails from './DeviceDetails';
import DeviceDetailsModel from '../../models/DeviceDetailsModel';
import {getDeviceBridge} from '../../drivers/DriverFactory';

const INITIAL_STATE = {
    headerLabel: "",
    headerField: "",
    deviceDetails:undefined
};

/**
 * Will get the device data
 * @return
 */
const getDeviceData = async ():Promise<DeviceDetailsModel> => {

    const deviceDetails: DeviceDetailsModel = await getDeviceBridge().getDeviceInfo();
    console.log( 'Getting Device Details ', deviceDetails );
    alert(`App Build ${deviceDetails.appBuild}`);

    return deviceDetails;
};
class DeviceSummary extends Component {
    state: any = {};
    constructor(props: any) {
        super(props);
        this.state = { ...INITIAL_STATE };
    }

    componentWillMount(){

        getDeviceData().then( deviceDetails => {
            console.log( 'Updating device details', deviceDetails)
            this.setState( {
                deviceDetails:deviceDetails
            });
        }).catch( err => {
            console.log( 'Unexpected Error in compoment will mount', err);
        });
    }

    render() {
        console.log( 'Rerending the summary page', this.state.deviceDetails);
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
