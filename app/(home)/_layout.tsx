import { Tabs } from "expo-router";
import React from "react";
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function TabLayout() {
    return (
        <Tabs screenOptions={{ tabBarActiveTintColor: "#2168A6" }}>
            <Tabs.Screen
                name="listLembrete" options={{ title: "Lista de Lembretes", tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} /> }}
            />
            <Tabs.Screen
                name="addLembrete" options={{ title: "Adicionar Lembrete" ,headerShown:false, tabBarIcon: ({ color }) => <FontAwesome size={28} name="plus" color={color} /> }}
            />
        </Tabs>
    )

}