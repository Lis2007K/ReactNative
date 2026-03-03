import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StudentDetails from "../components/StudentDetails";

const StudentsScreen = () => {
    return (
        <View>
            <Text style={styles.text}>Students Screen</Text>
            <StudentDetails name="Dion" image={require("../assets/avatar1.png")} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
            <StudentDetails name="Fisi" image={require("../assets/avatar2.png")} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
            <StudentDetails name="Leon" image={require("../assets/avatar1.png")} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
            <StudentDetails name="Fisi" image={require("../assets/avatar2.png")} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
            <StudentDetails name="Leon" image={require("../assets/avatar1.png")} description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old."/>
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