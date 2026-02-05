import { useState, useEffect, useContext } from 'react'
import {View, Text, Button, StyleSheet} from 'react-native'
import { PrintViewInterface } from './PrintView.interface'
import PrintViewStyle from './PrintView.style'
import * as Print from 'expo-print';
import { shareAsync } from 'expo-sharing';


const PrintView = ({testID, style, type, size, props }:PrintViewInterface) => {

    const [selectedPrinter, setSelectedPrinter] = useState();

    const printToFile = async () => {
        // On iOS/android prints the given html. On web prints the HTML from the current page.
        const { uri } = await Print.printToFileAsync({ html });
        console.log('File has been saved to:', uri);
        await shareAsync(uri, { UTI: '.pdf', mimeType: 'application/pdf' });
    };

    const html = `
<html>
  <head>
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
  </head>
  <body style="text-align: center;">
    <h1 style="font-size: 50px; font-family: Helvetica Neue; font-weight: normal;">
      Hello Expo!
    </h1>
    <img
      src="https://www.aldofietsen.nl/storage/cache/images/01KCPYN83M22ZNE9QV8S14FVMN_1600x1200_scale-down_5f5252ad956b17b16e5e719a3d05613d.png"
      style="width: 90vw;" />
  </body>
</html>
`;

    return(
      <View style={styles.container}>
          <Button title="Print" onPress={print} />
          <View style={styles.spacer} />
          <Button title="Print to PDF file" onPress={printToFile} />
      </View>
    )

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
        flexDirection: 'column',
        padding: 8,
    },
    spacer: {
        height: 8,
    },
    printer: {
        textAlign: 'center',
    },
});

export default PrintView
