import React from "react";
import { View, Text, StyleSheet, FlatList, TouchableOpacity, Image } from "react-native";
import data from "../data/products.json";

class ProductsScreen extends React.Component {
    constructor() {
        super();
        this.state = {
            products: [],
        };
    }
    componentDidMount() {
        this.setState({ products: data });
    }
    render() {
        return (
            <View style={styles.container}>
                <FlatList
                    style={styles.list}
                    contentContainerStyle={{ paddingBottom: 20 }}
                    data={this.state.products}
                    keyExtractor={(products) => products.id}
                    renderItem={({ item }) => (
                        <View style={styles.cardWrapper}>
                            <Image
                                source={{ uri: item.image }}
                                style={styles.image}
                            />
                            <Text>{item.name}</Text>
                            <Text>{item.category}</Text>
                            <Text>{item.description}</Text>
                            <View style={styles.buttonContainer}>
                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.backButton}
                                    onPress={() => this.props.navigation.goBack()}
                                >
                                </TouchableOpacity>
                                <Text>{item.price.toFixed(2)}</Text>
                            </View>
                        </View>
                    )}
                />
                <View style={styles.buttonContainer}>
                    <TouchableOpacity
                        style={styles.backButton}
                        onPress={() => this.props.navigation.goBack()}
                    >
                        <Text style={styles.buttonText}>Go Back</Text>
                    </TouchableOpacity>

                </View>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    
});
export default ProductsScreen;