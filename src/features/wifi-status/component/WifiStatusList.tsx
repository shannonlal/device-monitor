import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IDeviceDetailsModel, IWifiSummary } from '../../../interfaces/models';
import WifiSummaryTable from './WifiSummaryTable';
const WifiStatusList: React.FC = (): React.ReactElement => {
    const initiWifiNetworks: IWifiSummary[] = [];
    const [wifiNetworks, setWifiNetworks] = useState(<IWifiSummary[]>{ initiWifiNetworks });
    const ssidLabel = 'Network Name';
    const signalStrengthLabel = 'Signal Strength';
    
    /*useEffect(async () => {
        const result = await axios(
          'https://hn.algolia.com/api/v1/search?query=redux',
        );
     
        setData(result.data);
      }, []);*/

    const getWifiSummaryTable = (
        wifiSummary: IWifiSummary[] | undefined,
        ssidLabel: string,
        signalStrengthLabel: string,
    ): JSX.Element | undefined => {
        if (wifiSummary) {
            return (
                <WifiSummaryTable
                    ssidLabel={ssidLabel}
                    signalStength={signalStrengthLabel}
                    wifiNetworks={wifiSummary}
                />
            );
        }
    };

    return (
        <IonPage>
            <IonHeader>
                <IonToolbar>
                    <IonTitle>Wifi Networks</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent>{getWifiSummaryTable(wifiNetworks, ssidLabel, signalStrengthLabel)}</IonContent>
        </IonPage>
    );
};

export default WifiStatusList;
