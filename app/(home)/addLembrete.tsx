import { Text, StyleSheet, View,Switch, TextInput } from "react-native";
import React from "react";
import Button from "../../components/Button/button";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";



export default function LembreteEdit() {

    function onChangeText(){

    }
    function handleLembreteAction(){

    }
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.productArea}>
                
 
                <View style={styles.detailsArea}>
 
                    <Text style={styles.title}>Título</Text>
                    <TextInput
                        style={styles.input}
                        onChangeText={onChangeText}
                        textAlign='center'
                    />
 
 
                    <Text style={styles.description}>Descrição</Text>
                    <TextInput
                        editable={true}
                        multiline={true}
                        numberOfLines={6}
                        maxLength={60}
                        // onChangeText={text => onChangeText(text)}
                        onChangeText={onChangeText}
                        style={styles.input}
                        textAlign='center'
                    />
                    <View style={styles.switchArea}>
                        <Text>Não Concluída</Text>
                        <Switch
                            trackColor={{ false: '#767577', true: '#81b0ff' }}
                            value={false}
                        // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
                        // ios_backgroundColor="#3e3e3e"
                        // onValueChange={toggleSwitch}
                        // value={isEnabled}
                        />
                        <Text>Concluída</Text>
                    </View>
                </View>
            </View>
            <View style={styles.buttonArea}>
                <Button title="Adicionar" function={handleLembreteAction} />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor:'#E0EBEE',
        justifyContent:'center',
        alignItems:'center'
    }, productArea:{
        justifyContent:'center',
        alignItems:'center'
    }, detailsArea:{
        borderWidth:3,
        borderColor:"#2168A6",
        borderRadius:40,
        height:'80%',
        padding:30,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#fff'
    }, title:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        color:"#2168A6",
    }, input:{
        borderWidth:3,
        borderColor:"#2168A6",
        borderRadius:20,
        width:300,
        marginBottom:30,
    }, description:{
        fontSize:20,
        fontWeight:'bold',
        marginBottom:20,
        color:"#2168A6",
    }, switchArea:{
        flexDirection:'row',
        justifyContent:'space-between',
        width:'80%',
        alignItems:'center',
    }, buttonArea:{
        width:'50%',
    }
})