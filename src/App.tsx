import React from 'react';
import { Route } from 'react-router-dom';
import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Provider } from 'react-redux';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

/* Redux Store */
import { store } from './store/index';
/* Features */
import { default as ConnectedDeviceSummary } from './features/device-summary/component';
import { Login } from './features/login/component/Login';

const App: React.FC = () => (
    <Provider store={store}>
        <IonApp>
            <IonReactRouter>
                <IonRouterOutlet>
                    <Route exact path="/" component={Login} />
                    <Route exact path="/devices" component={ConnectedDeviceSummary} />
                </IonRouterOutlet>
            </IonReactRouter>
        </IonApp>
    </Provider>
);

export default App;
