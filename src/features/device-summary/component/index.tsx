import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import DeviceDetails from './DeviceDetails';
import { IDeviceDetailsModel } from '../../../interfaces/models';
import { getDeviceDetails } from '../store/effects';
import { IDeviceDetailsState } from '../store/reducer';
import { useSelector, useDispatch } from 'react-redux';

type IDeviceSummaryProps = {};

const DeviceSummary: React.FC<IDeviceSummaryProps> = (): React.ReactElement => {
    const dispatch = useDispatch();

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const headerField = 'Header';
    const headerLabel = 'Label';
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const deviceDetailsState: IDeviceDetailsState = useSelector((state: any) => {
        console.log('Calling use selector', state);
        if (state && state.deviceDetails) {
            if (deviceDetailsState.state === 'INIT') {
                dispatch(getDeviceDetails());
            }
        }
        return state.deviceDetails;
    });

    const getDeviceComponents = (
        deviceDetails: IDeviceDetailsModel | undefined,
        headerField: string,
        headerLabel: string,
    ): JSX.Element | undefined => {
        if (deviceDetails) {
            return <DeviceDetails headerField={headerField} headerLabel={headerLabel} deviceDetails={deviceDetails} />;
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Device Summary</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>{getDeviceComponents(deviceDetailsState.deviceDetails, headerField, headerLabel)}</IonContent>
        </IonPage>
    );
};

export default DeviceSummary;
