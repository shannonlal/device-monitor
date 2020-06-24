import React, { useState, useEffect } from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IDeviceDetailsModel, IWifiSummary } from '../../../interfaces/models';
import WifiSummaryTable from './WifiSummaryTable';
const WifiStatusList: React.FC = (): React.ReactElement => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const ssidLabel = 'Network Name';
    const signalStrengthLabel = 'Signal Strength';
    const wifiNetworks: IWifiSummary[] = [];
    // eslint-disable-next-line @typescript-eslint/no-explicit-any

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
