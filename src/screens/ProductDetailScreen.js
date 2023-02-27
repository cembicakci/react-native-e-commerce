import { StyleSheet, View, Image, FlatList, Dimensions, Text, ScrollView, Pressable, TouchableOpacity } from "react-native"

import products from "../data/products"

const ProductDetailScreen = () => {

    const product = products[0]
    console.log(product)

    const addToCart = () => {
        // console.warn('Add to cart!')
    }

    return (
        <View>
            <ScrollView style={styles.container}>

                {/* Image Carousel */}
                <FlatList
                    data={product.images}
                    renderItem={({ item }) => <Image source={{ uri: item }} style={styles.image} />}
                    horizontal={true} //layout horizontally
                    showsHorizontalScrollIndicator={false} //close scrollbar
                    pagingEnabled // when we scroll, it centers the images inside flatlist
                />

                <View style={styles.content}>
                    <Text style={styles.title}>{product.name}</Text>
                    <Text style={styles.price}>$ {product.price}</Text>
                    <Text style={styles.description}>{product.description}</Text>
                </View>
            </ScrollView>

            <TouchableOpacity style={styles.button} onPress={() => addToCart()} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Add to cart</Text>
            </TouchableOpacity>
        </View>
    )
}

export default ProductDetailScreen

const styles = StyleSheet.create({
    container: {
    },
    image: {
        width: Dimensions.get('window').width,
        aspectRatio: 1
    },
    content: {
        padding: 12
    },
    title: {
        fontSize: 34,
        fontWeight: '500',
        marginVertical: 10,
    },
    price: {
        fontWeight: '500',
        fontSize: 16,
        letterSpacing: 1.5
    },
    description: {
        marginVertical: 10,
        fontSize: 18,
        lineHeight: 30,
        fontWeight: '300'
    },
    button: {
        position: 'absolute',
        backgroundColor: 'black',
        bottom: 30,
        width: '90%',
        alignSelf: 'center',
        padding: 20,
        borderRadius: 100
    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '500',
        fontSize: 18
    }
})