import React from "react";
import {View, SafeAreaView, Text, StyleSheet} from "react-native";

export default function ProductScreen(props){
    return(
        <SafeAreaView
        style={{
            flex: 1,
            backgroundColor: "white",
          }}
        >
           <View><Text> ProductScreen </Text></View> 
        </SafeAreaView>
    )
}
