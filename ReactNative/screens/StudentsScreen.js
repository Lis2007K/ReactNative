import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={StyleSheet.text}>Students Screen</Text>
            <StudentDetails name="Dion"/>
            <StudentDetails/>
            <StudentDetails/>
        </View>
    );
}

const styles = StyleSheet.create({
    text: {
        textAlign: 'center',
        marginVertical: 20,
        fontSize: 20,
    },

});

export default StudentsScreen;