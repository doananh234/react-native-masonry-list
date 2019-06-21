import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Text, Image, TouchableHighlight } from 'react-native';

const TestZigZagItem = ({ item, index }) => {
  return (
    <TouchableHighlight
      style={styles.wraper}
      underlayColor="transparent"
      onPress={() => alert(item.author)}
    >
      <View style={styles.container}>
        <Image source={{ uri: item.download_url, cache: 'default' }} style={styles.image} />
        <Text style={styles.text}>{item.author}</Text>
      </View>
    </TouchableHighlight>
  );
};
TestZigZagItem.propTypes = {};

const styles = StyleSheet.create({
  wraper: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    padding: 10,
    shadowOpacity: 0.2,
    shadowRadius: 3,
    shadowOffset: {
      height: 3,
      width: 0,
    },
    elevation: 1,
  },
  image: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    borderRadius: 10,
    backgroundColor: '#f1f1f1',
  },
  text: {
    color: '#d1d1d1',
    fontWeight: 'bold',
    fontSize: 20,
  },
});

export default TestZigZagItem;
