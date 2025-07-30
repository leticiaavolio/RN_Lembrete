import { StyleSheet, Image, Text, View, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import { Shadow } from "react-native-shadow-2";
import LembreteItem from "../../components/lembreteItem.tsx/lembreteItem";

export default function Index() {

    function  navigate(){
        
        router.replace('/home')
    }
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <LembreteItem />
                    <LembreteItem />
                    <LembreteItem />
                    <LembreteItem />
                    <LembreteItem />
                    <LembreteItem />
                </View>
                
            </SafeAreaView>
        </ScrollView>
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
})
