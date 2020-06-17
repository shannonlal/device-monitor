import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useForm, Controller } from "react-hook-form";
import { IDispatch } from '../../../interfaces/dispatch';
import { IUser } from '../../../interfaces/models';

export const Login: React.FC<IDispatch> = (props: IDispatch): React.ReactElement => {

    const { register, handleSubmit, errors } = useForm<IUser>();

    const onSubmit = (data: IUser) => {
        console.log("data", data);
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

//export default DeviceDetails;