import React, {useEffect} from 'react';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/react';
import { IWifiDetails } from '../../../interfaces/models';
import { IWifiBridge } from '../../../drivers/interface';
import { getWifiBridge } from '../../../drivers/DriverFactory';

interface Props {
    ssid: string;
}
// TODO fire dispatch.  Get selected ssid from reducer.  Tonight
const WifiDeviceDetails: React.FC<Props> = (props): React.ReactElement => {
    const ssidLabel = 'Network Name';
    const signalStrengthLabel = 'Signal Strength';

    useEffect(() => {
        async function getWifiStatus() {
            try {
                const wifiBridge: IWifiBridge = getWifiBridge();

                const wifiDetails: IWifiDetails = await wifiBridge.getWifiDetails()

                setWifiNetworks(wifiNetworks);
            } catch (err) {}
        }
        getWifiStatus();
    }, []);

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
