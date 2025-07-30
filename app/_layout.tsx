import React from "react";
import {Stack} from 'expo-router'; 
 

//layout serve para chamar as routas 
export default function RootLayout(){
    return(
        <Stack screenOptions={{headerShown:false}}>
            <Stack.Screen name="index"/>
            <Stack.Screen name= "(home)" options={{title: "Lembretes"}}/>
        </Stack>
    )
}