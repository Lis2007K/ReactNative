import React from "react";
import { Text, StyleSheet, View } from "react-native";
import StudentInfo from "../components/StudentInfo";
import Projects from "../components/Projects";

const ProfileScreen = () => {
    return (
        <View>
            <StudentInfo name="Lis" position="Software Engineer" description="Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old." />
            <Projects />
        </View>
    );
}

const styles = StyleSheet.create({
    

});

export default ProfileScreen;