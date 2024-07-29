import React, { useEffect, useState } from 'react';
import { SafeAreaView, FlatList, StyleSheet, Button } from 'react-native';
import ProductItem from '../components/ProductItem';
import ProductModal from '../components/ProductModal';
import { useDispatch } from 'react-redux';
import { addToCart } from '../redux/cartSlice';

const ProductListScreen = ({ navigation }) => {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(response => response.json())
      .then(data => setProducts(data));
  }, []);

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
    setModalVisible(false);
  };

  const renderItem = ({ item }) => (
    <ProductItem item={item} onPress={() => { setSelectedProduct(item); setModalVisible(true); }} />
  );

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Go to Cart" onPress={() => navigation.navigate('Cart')} />
      <FlatList
        data={products}
        renderItem={renderItem}
        keyExtractor={item => item.id.toString()}
      />
      {selectedProduct && (
        <ProductModal
          visible={modalVisible}
          product={selectedProduct}
          onClose={() => setModalVisible(false)}
          onAddToCart={() => handleAddToCart(selectedProduct)}
        />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8f8f8',
  },
});

export default ProductListScreen;