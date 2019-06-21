import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, FlatList } from 'react-native';
import ZigZagItem from './ZigZagItem';

const ZigZagList = props => {
  const { paddingHorizontal, separator, itemStyle, renderItem } = props;
  const renderZigZagItem = ({ item, index }) => (
    <ZigZagItem
      index={index}
      paddingHorizontal={paddingHorizontal}
      separator={separator}
      itemStyle={itemStyle}
    >
      {renderItem({ item, index })}
    </ZigZagItem>
  );

  return (
    <FlatList
      numColumns={2}
      keyExtractor={(item, index) => `zigZigItem${index}`}
      style={styles.container}
      extraData={props.data}
      {...props}
      renderItem={renderZigZagItem}
    />
  );
};
ZigZagList.propTypes = {
  paddingHorizontal: PropTypes.number,
  separator: PropTypes.number,
  itemStyle: PropTypes.any,
  renderItem: PropTypes.func,
  contentContainerStyle: PropTypes.any,
};

ZigZagList.defaultProps = {
  paddingHorizontal: 20,
  separator: 10,
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default ZigZagList;
