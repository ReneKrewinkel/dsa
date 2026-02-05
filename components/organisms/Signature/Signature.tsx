import { useState, useEffect, useContext, useRef} from 'react'
import { View, Text, Image, StyleSheet } from 'react-native'
import { SignatureInterface } from './Signature.interface'
import SignatureStyle from './Signature.style'
import SignatureCanvas from 'react-native-signature-canvas';

/// TODO: update interface/arguments for Signature
const Signature = ({testID, style, type, size, props }:SignatureInterface) => {
    const [signature, setSignature] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const ref = useRef(null);

    const handleSignature = (signature) => {
        console.log('Signature captured:', signature);
        setSignature(signature);
        setIsLoading(false);
    };

    const handleEmpty = () => {
        console.log('Signature is empty');
        setIsLoading(false);
    };

    const handleClear = () => {
        console.log('Signature cleared');
        setSignature(null);
    };

    const handleError = (error) => {
        console.error('Signature pad error:', error);
        setIsLoading(false);
    };

    const handleEnd = () => {
        setIsLoading(true);
        ref.current?.readSignature();
    };

    return (
      <View style={styles.container}>
          <View style={styles.preview}>
              {signature && (
                <Image
                  resizeMode="contain"
                  style={{ width: 335, height: 114 }}
                  source={{ uri: signature }}
                />
              )}
          </View>
          <SignatureCanvas
            ref={ref}
            onEnd={handleEnd}
            onOK={handleSignature}
            onEmpty={handleEmpty}
            onClear={handleClear}
            onError={handleError}
            autoClear={false}
            descriptionText="Sign here"
            clearText="Clear"
            confirmText={isLoading ? "Processing..." : "Save"}
            penColor="#000000"
            backgroundColor="rgba(255,255,255,0)"
            webviewProps={{
                // Custom WebView optimization
                cacheEnabled: true,
                androidLayerType: "hardware",
            }}
          />
      </View>
    );

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100%',
        borderWidth: 3,
        borderColor: 'hotpink',
    },
    preview: {
        width: 335,
        height: 114,
        backgroundColor: '#F8F8F8',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
});


export default Signature
