import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';

import DeviceDetails from './DeviceDetails';
import { getDeviceData } from './sample-data';

const INITIAL_STATE = {};
class DeviceSummary extends Component {
    // state: any = {};
    // props: any = {};
    constructor(props: any) {
        super(props);
        // this.state = { ...INITIAL_STATE };
    }

    render() {
        //const { } = this.state;

        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Device Summary</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>
                    <DeviceDetails headerField="Device Field" headerLabel="Value" details={getDeviceData()} />
                </IonContent>
            </IonPage>
        );
    }
}

export default DeviceSummary;
