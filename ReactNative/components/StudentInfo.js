import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const StudentInfo = (props) => {
    return (
        <View style={styles.container}>
            <Image source={require("../assets/avatar1.png")} style={styles.img} />
            <View style={styles.infoContainer}>
                <Text style={styles.name}>{props.name}</Text>
                <Text style={styles.position}>{props.position}</Text>
                <Text style={styles.description}>{props.description}</Text>
                <Button title="Hire Him" color="#FFD700" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        paddingVertical: 20,
        backgroundColor: "#fff",
        borderRadius: 10,
        marginHorizontal: 10,
        marginVertical: 10,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
        elevation: 3,
    },
    img: {
        width: 120,
        height: 120,
        borderRadius: 60,
        marginBottom: 15,
    },
    infoContainer: {
        alignItems: "center",
        paddingHorizontal: 20,
    },
    name: {
        fontSize: 22,
        fontWeight: "bold",
        color: "#000",
        marginBottom: 5,
    },
    position: {
        fontSize: 16,
        color: "#666",
        marginBottom: 10,
    },
    description: {
        fontSize: 14,
        color: "#666",
        textAlign: "center",
        marginBottom: 15,
        lineHeight: 20,
    },
});

export default StudentInfo;