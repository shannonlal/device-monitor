import React, { Component } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { connect } from 'react-redux';
import DeviceDetails from './DeviceDetails';
import {IDeviceDetailsModel} from '../../../interfaces/models';
import {getDeviceBridge} from '../../../drivers/DriverFactory';
import {IDispatch} from '../../../interfaces/dispatch';
import {IDeviceDetailsState} from '../store/reducer';
import {getDeviceDetails} from '../store/effects';


type DeviceSummaryState = {};
type DeviceSummaryProps = {
    headerLabel: string;
    headerField: string;
    deviceDetails?: IDeviceDetailsModel;
};

class DeviceSummary extends Component<DeviceSummaryProps & IDispatch,DeviceSummaryState> {
    constructor(props: any) {
        super(props);
    }

    componentDidMount(){

        if( this.props.dispatch ){
            (this.props.dispatch(getDeviceDetails()))
        } 
    }

    getDeviceComponents(){

        if(this.props.deviceDetails){
            return (<DeviceDetails headerField={this.props.headerLabel} headerLabel={this.props.headerField} deviceDetails={this.props.deviceDetails}/>);
        }
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
                    {this.getDeviceComponents()}
                </IonContent>
            </IonPage>
        );
    }
}


const mapStateToProps = (state: any) => {
    if( state.deviceDetails.state === 'LOADED'){
        return {
            state: state.deviceDetails.state,
            deviceDetails: state.deviceDetails.deviceDetails,
            errorMessage: state.deviceDetails.errorMessage,
            headerLabel: 'Label',
            headerField: 'Field'
        }
    }
    return {
        state: state.state,
        headerLabel: 'Label',
        headerField: 'Field'
    }

  };

export default connect(mapStateToProps)(DeviceSummary)  

