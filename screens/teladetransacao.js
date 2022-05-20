import React, {Component} from "react";
import { StyleSheet, Text, View , TouchableOpacity} from 'react-native';
import * as Permissions from "expo-permissions";
import { BarCodeScanner } from "expo-barcode-scanner";

export default class Teladetransacao extends Component {
constructor(props){
    super(props);
    this.state = {
        stateMode: "normal",
        permissionsCamera: null,
        scanner: false,
        dateScanner: ""
    }
}

getCameraPermissions = async stateMode => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA);
    this.setState({
        /* se status === "granted", o usuário forneceu a permissão"*/
        permissionsCamera: status === "granted",
        stateMode: stateMode,
        scanner: false
    })
}

handleBarCodeScanned = async ({type, data}) => {
    this.setState({
       dateScanner: data,
       stateMode: "normal",
       scanner: true
    })
}

    render(){
        const { stateMode, permissionsCamera , dateScanner , scanner } = this.state;
        if(stateMode === "scanner"){
            return(
                <BarCodeScanner
                onBarCodeScanned={scanner ? undefined : this.handleBarCodeScanned}
                style={StyleSheet.absoluteFillObject}
                />
            )
        }

        return(
            <View style={styles.container}>
                <Text style={styles.text}>
                    {permissionsCamera ? dateScanner : "Solicitar permissão para a câmera"}
                </Text>
                <TouchableOpacity style={styles.button}
                onPress={() => this.getCameraPermissions("scanner")}
                >
                    <Text style={styles.buttonText}>Leia o QR code</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#5653D4"
    },
    text: {
        color: "#fff",
        fontSize: 30
    },
    button: {
        width: "43%",
        height: 80,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#F48D20",
        borderRadius: 15
    },
    buttonText: {
        fontSize: 24,
        color: "#FFFFFF"
    }
})



