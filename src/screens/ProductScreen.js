import { View, FlatList, StyleSheet, Image } from "react-native"

import products from '../data/products'

const ProductScreen = () => {
    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <View style={styles.itemContainer}>
                    <Image source={{ uri: item.image }} style={styles.image} />
                </View>
            )}
            numColumns={2}
        />
    )
}

export default ProductScreen

const styles = StyleSheet.create({
    itemContainer: {
        width: '50%',
        padding: 1
    },
    image: {
        width: '100%',
        aspectRatio: 1
    }
});