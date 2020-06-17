import React from 'react';
import { IonItem, IonInput, IonContent, IonLabel, IonButton } from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { IDispatch } from '../../../interfaces/dispatch';
import { IUser } from '../../../interfaces/models';

const initialValues = {
    eMail: '',
    password: '',
};

// Review tomorrow
// https://levelup.gitconnected.com/react-redux-hooks-useselector-and-usedispatch-f7d8c7f75cdd

export const Login: React.FC<IDispatch> = (props: IDispatch): React.ReactElement => {
    const { control, handleSubmit, errors } = useForm<IUser>({
        defaultValues: { ...initialValues },
        mode: 'onChange',
    });

    const onSubmit = (data: IUser) => {
        console.log('data', data);
    };

    return (
        <IonContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <IonItem>
                    <IonLabel>Email</IonLabel>
                    <Controller
                        as={IonInput}
                        control={control}
                        onChangeName="onIonChange"
                        type="email"
                        onChange={([selected]) => {
                            console.log('fullName', selected.detail.value);
                            return selected.detail.value;
                        }}
                        name="eMail"
                        rules={{
                            required: true,
                            minLength: { value: 4, message: 'Must be 4 chars long' },
                        }}
                    />
                </IonItem>
                {errors.eMail && errors.eMail.type === 'required' && (
                    <div className="error">Your must enter your eMail.</div>
                )}
                <IonItem>
                    <IonLabel>Password</IonLabel>
                    <Controller
                        as={IonInput}
                        control={control}
                        onChangeName="onIonChange"
                        type="password"
                        onChange={([selected]) => {
                            console.log('fullName', selected.detail.value);
                            return selected.detail.value;
                        }}
                        name="password"
                        rules={{
                            required: true,
                            minLength: { value: 4, message: 'Must be 4 chars long' },
                        }}
                    />
                </IonItem>
                {errors.eMail && errors.eMail.type === 'required' && (
                    <div className="error">Your must enter your eMail.</div>
                )}
                <IonButton type="submit" color="primary">
                    Primary
                </IonButton>
            </form>
        </IonContent>
    );
};

//export default DeviceDetails;
