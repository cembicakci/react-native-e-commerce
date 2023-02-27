import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import ProductDetailScreen from './src/screens/ProductDetailScreen';
import ProductScreen from './src/screens/ProductScreen';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <ProductScreen /> */}
      <ProductDetailScreen />
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
