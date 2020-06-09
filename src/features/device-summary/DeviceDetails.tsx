import React, {useEffect} from 'react';
import { IonText, IonRow, IonCol, IonGrid } from '@ionic/react';

import { DeviceField } from '../../components/common';

import { Plugins } from '@capacitor/core';

const { Device } = Plugins;


type DeviceDetailsProps = {
    headerLabel: string;
    headerField: string;
    details: Array<{
        label: string;
        value: string;
    }>;
};

const DeviceDetails: React.FC<DeviceDetailsProps> = (props: DeviceDetailsProps): React.ReactElement => {
    const getDeviceDetail = (label: string, value: string, id: number) => {
        return <DeviceField label={label} value={value} key={`df-${id}-${label}-${value}`} />;
    };

    const getDeviceDetails = (fields: Array<any>) => {
        return fields.map((field, i) => getDeviceDetail(field.label, field.value, i));
    };

    useEffect( () => {

        const getDeviceData = async () => {
            const deviceDetails = await Device.getInfo();

            console.log( 'Getting Device Details ', deviceDetails );

            alert(`App Build ${deviceDetails.appBuild}`);
        };

        getDeviceData();


    }, [])

    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText>{props.headerLabel}</IonText>
                </IonCol>
                <IonCol>
                    <IonText>{props.headerField}</IonText>
                </IonCol>
            </IonRow>
            {getDeviceDetails(props.details)}
        </IonGrid>
    );
};

export default DeviceDetails;
