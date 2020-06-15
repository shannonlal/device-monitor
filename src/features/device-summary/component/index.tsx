import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { connect } from 'react-redux';
import DeviceDetails from './DeviceDetails';
import { IDeviceDetailsModel } from '../../../interfaces/models';
import { IDispatch } from '../../../interfaces/dispatch';
import { getDeviceDetails } from '../store/effects';

type DeviceSummaryState = {};
type DeviceSummaryProps = {
    headerLabel: string;
    headerField: string;
    deviceDetails?: IDeviceDetailsModel;
};


//TODO.  Create a DeviceSummary which is not connected
//TODO.  Create a second component which is connected
export class DeviceSummary extends Component<DeviceSummaryProps & IDispatch, DeviceSummaryState> {
    constructor(props: DeviceSummaryProps & IDispatch) {
        super(props);
    }

    componentDidMount(): void {
        if (this.props.dispatch) {
            this.props.dispatch(getDeviceDetails());
        }
    }

    getDeviceComponents(): JSX.Element | undefined {
        if (this.props.deviceDetails) {
            return (
                <DeviceDetails
                    headerField={this.props.headerField}
                    headerLabel={this.props.headerLabel}
                    deviceDetails={this.props.deviceDetails}
                />
            );
        }

        return;
    }

    render(): JSX.Element {
        return (
            <IonPage>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>Device Summary</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonContent>{this.getDeviceComponents()}</IonContent>
            </IonPage>
        );
    }
}


const mapStateToProps = (state: any) => {
    if (state.deviceDetails.state === 'LOADED') {
        return {
            state: state.deviceDetails.state,
            deviceDetails: state.deviceDetails.deviceDetails,
            errorMessage: state.deviceDetails.errorMessage,
            headerLabel: 'Label',
            headerField: 'Field',
        }
    }
    return {
        state: state.state,
        headerLabel: 'Label',
        headerField: 'Field',
    };
};

export default connect(mapStateToProps)(DeviceSummary);
