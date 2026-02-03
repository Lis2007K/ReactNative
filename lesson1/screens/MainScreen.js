import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const MainScreen =() => {
    return <View style={styles.container}>
        <Text style={styles.textStyles}>This is main screen</Text>
    </View>
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#ffff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textStyles:{
        fontSize: 50,
    }
})

export default MainScreen;