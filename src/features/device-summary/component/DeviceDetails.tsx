import React from 'react';
import { IonText, IonRow, IonCol, IonGrid } from '@ionic/react';
import { IDeviceDetailsModel } from '../../../interfaces/models';
import DeviceField from '../../../components/common/DeviceField';

type DeviceDetailsProps = {
    headerLabel: string;
    headerField: string;
    deviceDetails?: IDeviceDetailsModel | undefined;
};
const DeviceDetails: React.FC<DeviceDetailsProps> = (props: DeviceDetailsProps): React.ReactElement => {
    const getDeviceDetail = (label: string, value: any, id: number) => {
        return <DeviceField label={label} value={value} key={`df-${id}-${label}-${value}`} />;
    };

    const getDeviceDetails = (details: IDeviceDetailsModel | undefined) => {
        if (typeof details === 'undefined') {
            return;
        }

        const deviceDetails = (Object.keys(details) as Array<keyof typeof details>).map((field, i) => {
            return getDeviceDetail(field, details[field], i);
        });

        return deviceDetails;
    };
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
            {getDeviceDetails(props.deviceDetails)}
        </IonGrid>
    );
};

export default DeviceDetails;
