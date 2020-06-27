import React from 'react';
import { IonText, IonRow, IonCol } from '@ionic/react';

type DeviceFieldProps = {
    label: string;
    value: string;
    key: string;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    clickHandler?: (event: any) => void;
};

const DeviceField: React.FC<DeviceFieldProps> = (props: DeviceFieldProps): React.ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const handleClick = (event: any) => {
        if (props.clickHandler) {
            props.clickHandler(event);
        }
    };
    return (
        <IonRow>
            <IonCol>
                <IonText onClick={handleClick}>{props.label}</IonText>
            </IonCol>
            <IonCol>
                <IonText>{props.value}</IonText>
            </IonCol>
        </IonRow>
    );
};

export default DeviceField;
