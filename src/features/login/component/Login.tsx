import React from 'react';
import { IonItem, IonInput, IonContent, IonLabel, IonButton } from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { IUser, IAuthorization } from '../../../interfaces/models';
import { useSelector, useDispatch } from 'react-redux';
import { authorizeUser } from '../store/effects';

const initialValues = {
    eMail: '',
    password: '',
};

interface IProps {
}

// Areas to focus on next
// 1. Add the new action, effects and reducer for login service
// 2. Integrate the service into the component
// 3. Implement Unit Tests for this.

export const Login: React.FC<IProps> = (): React.ReactElement => {
    const dispatch = useDispatch();

    useSelector((state) => {
        console.log('Here is the state', state);
    });
    const { control, handleSubmit, errors } = useForm<IAuthorization>({
        defaultValues: { ...initialValues },
        mode: 'onChange',
    });

    const onSubmit = (auth: IAuthorization) => {
        dispatch(authorizeUser(auth));
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
                            console.log('eMail', selected.detail.value);
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
                {errors.password && errors.password.type === 'required' && (
                    <div className="error">Your must enter your Password.</div>
                )}
                <IonButton type="submit" color="primary">
                    Primary
                </IonButton>
            </form>
        </IonContent>
    );
};

//export default DeviceDetails;
