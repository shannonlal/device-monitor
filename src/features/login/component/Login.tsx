import React, { useState } from 'react';
import { IonItem, IonInput, IonContent, IonLabel, IonButton } from '@ionic/react';
import { useForm, Controller } from 'react-hook-form';
import { IAuthorization } from '../../../interfaces/models';
import { useSelector, useDispatch } from 'react-redux';
import { authorizeUser } from '../store/effects';
import { IAuthorizationState } from '../store/reducer';
import { useHistory, useLocation } from 'react-router-dom';

const initialValues = {
    eMail: '',
    password: '',
};

interface IProps {}

const Login: React.FC<IProps> = (): React.ReactElement => {
    const history = useHistory();
    const dispatch = useDispatch();

    const location = useLocation();

    console.log( 'history', history);
    const [authSuccessful, setAuthSuccessful] = useState(true);

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    useSelector((state: any) => {
        console.log('state', state.login);
        if (state && state.login) {
            const loginState: IAuthorizationState = state.login;
            if (loginState.state === 'AUTHENTICATED') {
                console.log('authenticated', state.login);
                if (authSuccessful === false) {
                    setAuthSuccessful(true);
                }
                history.push('/devices');
            } else if (loginState.state === 'ERROR') {
                if (authSuccessful === true) {
                    setAuthSuccessful(false);
                }
            }
        }
    });
    const { control, handleSubmit, errors } = useForm<IAuthorization>({
        defaultValues: { ...initialValues },
        mode: 'onChange',
    });

    const onSubmit = (auth: IAuthorization) => {
        if (authSuccessful === false) {
            setAuthSuccessful(true);
        }
        console.log('dispatch', auth);
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
                        title="eMail"
                        onChange={([selected]) => {
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
                        title="password"
                        onChange={([selected]) => {
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
                {authSuccessful === false && <div className="error">Invalid Credentials</div>}
            </form>
        </IonContent>
    );
};

export default Login;
