import React from "react";
import { Title, Text, StyleSheet, View } from "react-native";

const StudentInfoScreen = () => {
    const name = "Lis";
    const surname = "Kastrati";
    const age = "18";
    const city = "Prishtina";
    return(
        <Title>Info about me</Title>,
        <Text>Name: {name}</Text>,
        <Text>Surname: {surname}</Text>,
        <Text>: {name}</Text>
    )
}

export default StudentInfoScreen;