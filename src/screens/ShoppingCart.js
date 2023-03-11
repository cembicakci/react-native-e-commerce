import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import CartListItem from "../components/CartListItem"
import { useSelector, useDispatch } from 'react-redux'
import { selectedDeliveryPrice, selectSubTotal, selectTotal } from "../redux/cartSlice"
// import cart from '../data/cart'

const ShoppingCart = () => {

    const cartItems = useSelector(state => state.cart.items)
    const subTotal = useSelector(selectSubTotal)
    const deliveryPrice = useSelector(selectedDeliveryPrice)
    const total = useSelector(selectTotal)

    const shoppingCartTotal = () => (
        <View style={styles.totalContainer}>
            <View style={styles.row}>
                <Text style={styles.text}>Subtotal</Text>
                <Text style={styles.text}>{subTotal} $</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.text}>Delivery</Text>
                <Text style={styles.text}>{deliveryPrice} $</Text>
            </View>
            <View style={styles.row}>
                <Text style={styles.textBold}>Total</Text>
                <Text style={styles.textBold}>{total} $</Text>
            </View>
        </View>
    )

    return (
        <>
            <FlatList
                data={cartItems}
                renderItem={({ item }) => <CartListItem cartItem={item} />}
                ListFooterComponent={shoppingCartTotal}
            />

            <TouchableOpacity style={styles.button} activeOpacity={0.8}>
                <Text style={styles.buttonText}>Checkout</Text>
            </TouchableOpacity>
        </>
    )
}

export default ShoppingCart

const styles = StyleSheet.create({
    container: {},
    totalContainer: {
        margin: 20,
        borderColor: '#eee',
        borderTopWidth: 1,
        paddingTop: 10
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 2
    },
    text: {
        fontSize: 16,
        color: 'gray'
    },
    textBold: {
        fontSize: 16,
        fontWeight: '500'
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