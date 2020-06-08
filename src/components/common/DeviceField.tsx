import React from 'react';
import { IonText, IonRow, IonCol } from '@ionic/react';

type DeviceFieldProps = {
    label: string;
    value: string;
    key: string;
};

const DeviceField: React.FC<DeviceFieldProps> = (props: DeviceFieldProps): React.ReactElement => {
    return (
        <IonRow>
            <IonCol>
                <IonText>{props.label}</IonText>
            </IonCol>
            <IonCol>
                <IonText>{props.value}</IonText>
            </IonCol>
        </IonRow>
    );
};

export default DeviceField;
