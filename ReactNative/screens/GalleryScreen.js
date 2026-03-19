import React from "react";
import { View, StyleSheet, Text, FlatList, Image } from "react-native";

class GalleryScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            photos: [],
        }
    }

    async componentDidMount() {
        const data = await fetch('https://jsonplaceholder.typicode.com/photos');
        const jsonData = await data.json();
        this.setState({ photos: jsonData });
    }

    render() {
        const { photos } = this.state;
        return (
            <View style={styles.container}>
                <Text style={styles.title}>
                    Photos
                </Text>
                <FlatList
                    style={{ flex: 1 }}
                    keyExtractor={item => item.id.toString()}
                    data={photos.slice(0, 50)} // Limit to 50 for scroll testing
                    showsVerticalScrollIndicator={true}
                    renderItem={({ item }) => (
                        <View style={styles.itemContainer}>
                            <Image
                                source={{ uri: item.thumbnailUrl }}
                                style={styles.image}
                            />
                            <Text style={styles.itemText} numberOfLines={1} ellipsizeMode="tail">
                                {item.id} - {item.title}
                            </Text>
                        </View>
                    )}
                />
            </View>
        );
    }
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        padding: 10,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
        color: '#333',
    },
    itemContainer: {
        margin: 10,
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 5,
        elevation: 3, // For Android
    },
    image: {
        width: 150,
        height: 150,
        borderRadius: 10,
        marginBottom: 10,
    },
    itemText: {
        fontSize: 14,
        textAlign: 'center',
        color: '#666',
    },
});

export default GalleryScreen;