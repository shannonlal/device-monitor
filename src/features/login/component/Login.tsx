import React from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { IDispatch } from '../../../interfaces/dispatch';
import { IUser } from '../../../interfaces/models';

let initialValues = {
    userName: "",
    password: ""
  };

export const Login: React.FC<IDispatch> = (props: IDispatch): React.ReactElement => {

    const { register, handleSubmit, errors } = useForm<IUser>({
        defaultValues: { ...initialValues },
        mode: 'onChange',
    });

    const onSubmit = (data: IUser) => {
        console.log('data', data);
    };
    return (
        <IonContent>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="field">
                    <label htmlFor="userName">Name</label>
                    <input type="text" id="userName" name="userName" ref={register({ required: true })} />
                    {errors.userName && errors.userName.type === 'required' && (
                        <div className="error">Your must enter your userName.</div>
                    )}
                </div>
                <div className="field">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" name="password" ref={register({ required: true })} />
                    {errors.password && errors.password.type === 'required' && (
                        <div className="error">Your must enter your password.</div>
                    )}
                </div>
                <button type="submit">Save</button>
            </form>
        </IonContent>
    );
};

//export default DeviceDetails;
