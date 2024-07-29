import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const ProductItem = ({ item, onPress }) => (
  <TouchableOpacity style={styles.itemContainer} onPress={() => onPress(item)}>
<View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
          <View style={styles.infoContainer}>
      <Text style={styles.title}>{item.title}</Text>
      <Text style={styles.price}>{`Rs. ${item.price}`}</Text>
      <Text style={styles.category}>{`Category: ${item.category}`}</Text>
    </View>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 20,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
  },
  imageContainer: {
    width: 120,
    height: 150,
    marginRight: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  infoContainer: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  category: {
    fontSize: 12,
    color: '#aaa',
  },
});

export default ProductItem;