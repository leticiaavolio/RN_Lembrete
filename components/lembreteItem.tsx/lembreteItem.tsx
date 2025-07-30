import { Text, StyleSheet, Pressable, View,Switch } from "react-native";
import { Lembrete } from "../../types/lembrete";
import React from "react";
import { Link } from "expo-router";

type Props={
    lembrete:Lembrete
}



export default function LembreteItem({lembrete}:Props) {

    return (
        <Link href={`/lembrete/${lembrete.LembreteId}`} asChild>

        <Pressable style={styles.item}>
            <View style={styles.textContainer}>
                <Text style={styles.title}>{lembrete.TituloLembrete}</Text>
            </View>
            <View style={styles.statusContainer}>
                <Switch
                trackColor={{ false: '#808080', true: "#2168A6" }}
                value={lembrete.StatusLembrete}
                // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                // ios_backgroundColor="#3e3e3e"
                // onValueChange={toggleSwitch}
                // value={isEnabled}
                />
            </View>
        </Pressable>

        </Link>
    );
}

const styles = StyleSheet.create({
    item:{
        width: '90%',
        height:160,
        borderBottomColor: "#2168A6",
        borderBottomWidth:1,
        flexDirection:'row',
        alignItems:'center',
        alignSelf:'center',
    },
    textContainer:{
        flexDirection:'column',
        width: '80%',
        marginLeft:20,
    },
    title:{
        fontSize:24,
        color: "#2168A6",
        fontWeight:'bold',
        marginBottom:10,
    },
    statusContainer:{
        marginRight:20,
    }
})