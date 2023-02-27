import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import Navigation from './src/navigation';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductScreen from './src/screens/ProductScreen';
import ShoppingCart from './src/screens/ShoppingCart';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      {/* <ProductDetailScreen /> */}
      {/* <ShoppingCart /> */}
      <Navigation />
      <StatusBar style='auto' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  }
});
