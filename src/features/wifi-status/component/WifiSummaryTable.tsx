import React from 'react';
import { IonText, IonRow, IonCol, IonGrid } from '@ionic/react';
import { IWifiSummary } from '../../../interfaces/models';
import DeviceField from '../../../components/common/DeviceField';

type WifiSummaryTableProps = {
    ssidLabel: string;
    signalStength: string;
    wifiNetworks?: IWifiSummary[] | undefined;
};
const WifiSummaryTable: React.FC<WifiSummaryTableProps> = (props: WifiSummaryTableProps): React.ReactElement => {
    const getWifiSummary = (ssid: string, strength: number, id: number) => {
        return <DeviceField label={ssid} value={strength.toString()} key={`df-${id}-${ssid}-${strength}`} />;
    };

    const getSummaryTable = (wifiNetworks: IWifiSummary[] | undefined) => {
        if (typeof wifiNetworks === 'undefined') {
            return;
        }

        const summaryNetworks = wifiNetworks.map((wifi, i) => {
            return getWifiSummary(wifi.ssid, wifi.signalStrength, i);
        });

        return summaryNetworks;
    };
    return (
        <IonGrid>
            <IonRow>
                <IonCol>
                    <IonText>{props.ssidLabel}</IonText>
                </IonCol>
                <IonCol>
                    <IonText>{props.signalStength}</IonText>
                </IonCol>
            </IonRow>
            {getSummaryTable(props.wifiNetworks)}
        </IonGrid>
    );
};

export default WifiSummaryTable;
