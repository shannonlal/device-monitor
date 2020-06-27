import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent, IonRow, IonText, IonCol, IonGrid } from '@ionic/react';
import { IWifiDetails } from '../../../interfaces/models';
import { IWifiBridge } from '../../../drivers/interface';
import { getWifiBridge } from '../../../drivers/DriverFactory';
import { DeviceField } from '../../../components/common';

const WifiDeviceDetails: React.FC = (): React.ReactElement => {
    const [deviceDetails, setDeviceDetails] = useState<IWifiDetails>();
    const [ssidSelected, setSsidSelected] = useState('');
    const propertyLabel = 'Property';
    const valueLabel = 'Value';
    const fieldLabels = {
        signalStrength: 'Signal Strength',
        ssid: 'Network Name',
        security: 'Security',
    };

    useSelector((state: any) => {
        if (state && state.wifi) {
            const ssid: string = state.wifi.ssid;
            if (!ssid || ssid !== '') {
                setSsidSelected('');
            } else {
                setSsidSelected(ssid);
            }
        }
    });

    useEffect(() => {
        async function getWifiDetails(ssidSelected: string) {
            try {
                const wifiBridge: IWifiBridge = getWifiBridge();

                const wifiDetails: IWifiDetails = await wifiBridge.getWifiDetails(ssidSelected);

                setDeviceDetails(wifiDetails);
            } catch (err) {}
        }
        if (ssidSelected && ssidSelected !== '') {
            getWifiDetails(ssidSelected);
        }
    }, []);

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Wifi ${ssidSelected}</IonTitle>
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
                    {deviceDetails && (
                        <div>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.ssid}
                                    value={deviceDetails.ssid}
                                    key={`df-wifi-details-${fieldLabels.ssid}`}
                                />
                            </IonRow>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.signalStrength}
                                    value={deviceDetails.signalStrength.toString()}
                                    key={`df-wifi-details-${fieldLabels.signalStrength}`}
                                />
                            </IonRow>
                            <IonRow>
                                <DeviceField
                                    label={fieldLabels.security}
                                    value={deviceDetails.security.toString()}
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
