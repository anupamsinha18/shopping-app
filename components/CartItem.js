import React from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../redux/cartSlice';
import { Ionicons } from '@expo/vector-icons'; // Make sure to install @expo/vector-icons

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <View style={styles.itemContainer}>
      <View style={styles.imageContainer}>
        <Image source={{ uri: item.image }} style={styles.image} />
      </View>
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.price}>{`Rs. ${item.price}`}</Text>
        <View style={styles.buttonContainer}>
          <Button title="-" onPress={() => dispatch(decrementQuantity(item.id))} />
          <Text style={styles.quantity}>{`Quantity: ${item.quantity}`}</Text>

          <Button title="+" onPress={() => dispatch(incrementQuantity(item.id))} />
        </View>
      </View>
      <View style={styles.subtotalContainer}>
        <Text style={styles.subtotalText}>{`Subtotal: Rs. ${(item.price * item.quantity).toFixed(2)}`}</Text>
      </View>
      <TouchableOpacity style={styles.removeButton} onPress={() => dispatch(removeFromCart(item.id))}>
        <Ionicons name="trash" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    flexDirection: 'row',
    padding: 10,
    marginVertical: 5,
    backgroundColor: '#fff',
    borderRadius: 5,
    elevation: 2,
    alignItems: 'center',
  },
  imageContainer: {
    width: 60,
    height: 60,
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
    justifyContent: 'center',
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 14,
    color: '#888',
  },
  quantity: {
    fontSize: 14,
    color: '#888',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  subtotalContainer: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  subtotalText: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  removeButton: {
    marginLeft: 10,
  },
});

export default CartItem;