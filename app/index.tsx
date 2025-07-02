import { StyleSheet, Image, Text, View, Button } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Shadow } from "react-native-shadow-2";

export default function Index() {

    return (
        <SafeAreaView style={styles.container}>

                <Shadow distance={1} offset={[5, 5]} startColor='#2168A6' endColor="#E0EBEE" >
                    <Image
                        source={require('../assets/remindmeLogo.png')}
                        style={styles.logo}
                        resizeMode='cover'
                    />
                </Shadow>
                <View>
                    <View style={styles.tituloContainer}>
                        <Text style={[styles.titulo, styles.destaque]}>Lem</Text>
                        <Text style={styles.titulo}>Brete</Text>
                    </View>
                    <Text style={styles.texto}>Para seus lembretes!</Text>
                </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center',
        gap: 16,
        backgroundColor: '#E0EBEE',
    },
    logo: {
        height: 150,
        width: 150,
        marginBottom: 20,
        alignSelf: 'center',
        borderColor: "#2168A6",
        borderWidth: 1,

        borderRadius: 20,
    },
    tituloContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignSelf: 'center'
    },
    titulo: {
        fontSize: 32,
        fontWeight: '900',
        alignSelf: 'center'
    },
    texto: {
        fontSize: 16,
        alignSelf: 'center'
    },
    destaque: {
        color: "#2168A6",
    }
})


