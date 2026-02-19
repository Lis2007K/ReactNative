import React from "react";
import { Title, Text, StyleSheet, View } from "react-native";

const StudentInfoScreen = () => {
    const firstName = "Lis";
    const surname = "Kastrati";
    let fullName = `${firstName} ${surname}`;
    fullName = `${fullName}`;

    const birthday = 'December 27, 2007';
    const city = 'Prishtina';
    const classroom = '12th grade'
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Student Personal Info</Text>

            <View style={styles.infoCard}>
                <Text style={styles.label}>Full Name:</Text>
                <Text style={styles.value}>{fullName}</Text>

                <Text style={styles.label}>Birthday:</Text>
                <Text style={styles.value}>{birthday}</Text>

                <Text style={styles.label}>City:</Text>
                <Text style={styles.value}>{city}</Text>

                <Text style={styles.label}>Class:</Text>
                <Text style={styles.value}>{classroom}</Text>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f4f7ff',
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
        color: '#1d3557',
        marginBottom: 18,
    },
    infoCard: {
        borderColor: '#dbe4ff',
        padding: 16,
        backgroundColor: '#ffffff',
        borderRadius: 14,
        borderWidth: 1,
    },
    label: {
        fontSize: 14,
        fontWeight: '700',
        color: '#457b9d',
        marginTop: 8,
    },
    value: {
        fontSize: 18,
        color: '#1d3557',
        marginTop: 2,
    },
});

export default StudentInfoScreen;