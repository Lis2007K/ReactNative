import React from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const MenuScreen = (props) => {
    return(
        <View>
            <Text style={StyleSheet.text}>
                Welcom to Menu Screen
            </Text>
            <Button
                title="Go to List Screen"
                color="purple"
                onPress={() => props.navigation.navigate('List')}
            />
            <TouchableOpacity style={styles.btn}
             onPress={() => props.navigation.navigate('Students')}>
                <Text style={styles.btnText}>Go to Students Screen</Text>
            </TouchableOpacity>
            <Button
                title="Go to Profile Screen"
                color="purple"
                onPress={() => props.navigation.navigate('Profile')}
            />
            <TouchableOpacity style={styles.btn}
             onPress={() => props.navigation.navigate('Box')}>
                <Text style={styles.btnText}>Go to Box Screen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.btn}
             onPress={() => props.navigation.navigate('Posts')}>
                <Text style={styles.btnText}>Go to Posts Screen</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    textStyle: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 25,
    },
    btn: {
        backgroundColor: '#3446eb',
        paddingVertical: 7,
        marginVertical: 10,
    },
    btnText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 15,
        textTransform: 'uppercase',
    },
});

export default MenuScreen;