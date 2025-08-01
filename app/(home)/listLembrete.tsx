import { StyleSheet, View, ScrollView, FlatList } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";
import LembreteItem from "../../components/lembreteItem.tsx/lembreteItem";
import { getAllLembretes } from "../../services/lembrete";

export default function Index() {

    const lembretes = getAllLembretes();
    return (
        <ScrollView>
            <SafeAreaView style={styles.container}>
                <View>
                    <FlatList data={lembretes}
                    renderItem={({item})=><LembreteItem lembrete={item}/>}
                    keyExtractor = {item=> item.LembreteId.toString()}                    
                    />
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
