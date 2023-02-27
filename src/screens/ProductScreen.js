import { useNavigation } from "@react-navigation/native"
import { View, FlatList, StyleSheet, Image, TouchableOpacity } from "react-native"

import products from '../data/products'

const ProductScreen = () => {

    const navigation = useNavigation();

    return (
        <FlatList
            data={products}
            renderItem={({ item }) => (
                <TouchableOpacity
                    style={styles.itemContainer}
                    activeOpacity={0.8}
                    onPress={() => { navigation.navigate('ProductDetail', item) }}
                >
                    <Image source={{ uri: item.image }} style={styles.image} />
                </TouchableOpacity>
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
