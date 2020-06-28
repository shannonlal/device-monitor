import React from 'react';
import { useSelector } from 'react-redux';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonText, IonCol, IonGrid } from '@ionic/react';
import { DeviceField } from '../../../components/common';
import { IWifiState } from '../store/reducer';

const WifiDeviceDetails: React.FC = (): React.ReactElement => {
    const propertyLabel = 'Property';
    const valueLabel = 'Value';
    const fieldLabels = {
        signalStrength: 'Signal Strength',
        ssid: 'Network Name',
        security: 'Security',
    };

    const wifiNotFound = `No Details Found on Wifi Network`;

    const wifiState: IWifiState = useSelector((state: any) => {
        if (state && state.wifi) {
            return state.wifi;
        }
    });

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Wifi {wifiState.ssid}</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>
                <IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonText>{propertyLabel}</IonText>
                        </IonCol>
                        <IonCol>
                            <IonText>{valueLabel}</IonText>
                        </IonCol>
                    </IonRow>
                    {wifiState.state === 'ERROR' && (
                        <IonRow>
                            <IonText>{wifiNotFound}</IonText>
                        </IonRow>
                    )}
                    {wifiState.selectedWifi && (
                        <div>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.ssid}
                                    value={wifiState.selectedWifi.ssid}
                                    key={`df-wifi-details-${fieldLabels.ssid}`}
                                />
                            </IonRow>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.signalStrength}
                                    value={wifiState.selectedWifi.signalStrength.toString()}
                                    key={`df-wifi-details-${fieldLabels.signalStrength}`}
                                />
                            </IonRow>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.security}
                                    value={wifiState.selectedWifi.security.toString()}
                                    key={`df-wifi-details-${fieldLabels.security}`}
                                />
                            </IonRow>
                        </div>
                    )}
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default WifiDeviceDetails;
