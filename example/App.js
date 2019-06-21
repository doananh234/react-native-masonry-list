/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import ZigZagList from 'react-native-zig-zag-list';
import TestZigZagItem from './TestZigZagItem';

const App = () => {
  const [data, setData] = useState([]);
  const getData = () => {
    fetch('https://picsum.photos/v2/list')
      .then(res => res.json())
      .then(jsonData => {
        setData(jsonData);
      });
  };

  const renderItem = ({ item, index }) => <TestZigZagItem item={item} />;

  useEffect(() => {
    getData();
  }, []);
  return (
    <ZigZagList
      contentContainerStyle={styles.contentContainerStyle}
      style={styles.container}
      data={data}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  contentContainerStyle: {
    paddingVertical: 60,
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

export default App;
