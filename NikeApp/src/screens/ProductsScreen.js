import { StyleSheet, Text, View, Image, FlatList } from 'react-native';
import React from 'react';
import products from '../data/products.js';
// import { StatusBar } from 'react-native/Libraries/Components/StatusBar/StatusBar';

const ProductsScreen = () => {
  console.log(products[0].image);
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image
              source={{
                uri: item.image,
              }}
              style={styles.image}
            />
          </View>
        )}
        numColumns={2}
      />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
};

export default ProductsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  itemContainer: {
    width: "50%",
    padding: 1
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
});
