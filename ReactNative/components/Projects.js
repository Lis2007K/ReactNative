import React from "react";
import { Text, StyleSheet, View, Image, Button } from "react-native";

const Projects = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.infoContainer}>
                <Text style={styles.text}>PROJECTS</Text>
                <Button title="View All" color="#FFD700" />
            </View>
            <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                <Image source={require("../assets/project1.png")} style={styles.img} />
                <Image source={require("../assets/project2.png")} style={styles.img} />
            </View>
        </View>

    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 20,
        paddingVertical: 15,
    },
    infoContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: 15,
    },
    text: {
        fontSize: 18,
        fontWeight: "bold",
        color: "#000",
    },
    btn: {
        backgroundColor: "#FFD700",
        paddingHorizontal: 20,
        paddingVertical: 10,
        borderRadius: 20,
    },
    img: {
        width: "45%",
        height: 150,
        marginRight: 10,
        borderRadius: 10,
        marginBottom: 10,
    },
});

export default Projects;