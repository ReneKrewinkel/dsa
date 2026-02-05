import { CameraView, CameraType, useCameraPermissions } from 'expo-camera';
import { useState, useRef } from 'react';
import { Button, StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const ShowCamera = () => {
    const [facing, setFacing] = useState<CameraType>('back');
    const [flash, setFlash] = useState<'off' | 'on' >('off');
    const [permission, requestPermission] = useCameraPermissions();
    const [imageList, setImageList] = useState<string[]>([]);

    const [photoUri, setPhotoUri] = useState<string | null>(null);

    const ref = useRef<CameraView>(null)

    if (!permission) {
        // Camera permissions are still loading.
        return <View />;
    }


    const takePicture = async () => {
        if (ref.current) {
            const photo = await ref.current.takePictureAsync({
                base64: true
            });
            console.log('Photo taken:', photo);
            if(photo?.uri) {
                setImageList(current => [...current, photo.uri || '']);
                setPhotoUri(photo.uri);
            }
        }
    }

    if (!permission.granted) {
        // Camera permissions are not granted yet.
        return (
          <View style={styles.container}>
              <Text style={styles.message}>We need your permission to show the camera</Text>
              <Button onPress={requestPermission} title="grant permission" />
          </View>
        );
    }

    function toggleCameraFacing() {
        setFacing(current => (current === 'back' ? 'front' : 'back'));
    }

    function toggleFlash() {
        setFlash(current => (current === 'off' ? 'on' : 'off'));
    }

    return (
      <View style={styles.container}>

          <View style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', marginBottom: 10 }}>

              {
                  imageList.map((uri, index) => (
                      <Image key={index} source={{ uri: uri }} style={{ width: 30, height: 30, margin: 5 }} />
                  ))
              }


          </View>



          <CameraView
            ref={ref}
            style={styles.camera}
            facing={facing}
            flash={flash}
            animateShutter={true}
            barcodeScannerSettings={{
                barcodeTypes: ["qr", "ean13", "ean8", "code128"],
            }}
            onBarcodeScanned={ ({ type, data }) => {
                console.log(`${data}`);
            }}
          />
          <View style={styles.buttonContainer}>
              <TouchableOpacity style={styles.button} onPress={toggleCameraFacing}>
                  <Text style={styles.text}>Flip Camera</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={takePicture}>
                  <Text style={styles.text}>foto</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.button} onPress={toggleFlash}>
                  <Text style={styles.text}>Flash { flash }</Text>
              </TouchableOpacity>
          </View>
      </View>
    );


}

export default ShowCamera

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'hotpink',
        width: 400,
    },
    message: {
        textAlign: 'center',
        paddingBottom: 10,
    },
    camera: {
        // flex: 1,
        width: 400,
        height: 300,
    },
    buttonContainer: {
        position: 'absolute',
        bottom: 64,
        flexDirection: 'row',
        backgroundColor: 'transparent',
        width: '100%',
        gap: 20,
    },
    button: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 4,
        backgroundColor: 'rgba(0, 0, 0, 0.3)',
        padding: 8,
    },
    text: {
        fontSize: 12,
        fontWeight: 'bold',
        color: 'black',
    },
});
