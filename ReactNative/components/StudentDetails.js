import React from "react";
import { Text, StyleSheet, View, Image } from "react-native";

const StudentDetails = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.cardWrapper}>
                <View style={styles.imgwrapper}>
                    <Image source={props.image} style={styles.img} />
                    </View>
                    <View style={styles.infowrapper}>
                        <Text style={styles.name}>{props.name}</Text>
                        <Text>{props.description}</Text>
                    </View>
            </View>
        </View>
    ); 
}

const styles = StyleSheet.create({

    cardWrapper: {
        flexDirection: 'row',
        backgroundColor: '#fff',
        borderRadius: 8,
        alignSelf: 'center',
        margin: 15,
    },
    img: {
        width: 100,
        height: 100,
        borderRadius: 8,
        marginRight: 8,
    },
    infowrapper: {
        marginLeft: 20,
        marginTop: 20,
    },
    name: {
        fontWeight: 'bold',
    },
});

export default StudentDetails;