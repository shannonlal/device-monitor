import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IWifiSummary } from '../../../interfaces/models';
import WifiSummaryTable from './WifiSummaryTable';
import { getWifiBridge } from '../../../drivers/DriverFactory';
import { IWifiBridge } from '../../../drivers/interface';

const WifiStatusList: React.FC = (): React.ReactElement => {
    const [wifiNetworks, setWifiNetworks] = useState<IWifiSummary[]>();
    const ssidLabel = 'Network Name';
    const signalStrengthLabel = 'Signal Strength';

    useEffect(() => {
        async function getWifiStatus() {
            try {
                const wifiBridge: IWifiBridge = getWifiBridge();

                const wifiNetworks: IWifiSummary[] = await wifiBridge.getWifiNetworks();

                setWifiNetworks(wifiNetworks);
            } catch (err) {}
        }
        getWifiStatus();
    }, []);

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
