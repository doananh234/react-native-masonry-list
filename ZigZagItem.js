import React from 'react';
import PropTypes from 'prop-types';
import { View, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const ZigZagItem = ({ index, paddingHorizontal, separator, itemStyle, children }) => {
  const ITEM_WIDTH = (width - paddingHorizontal * 2 - separator) / 2;
  const LAYOUT = [ITEM_WIDTH * 1.1, ITEM_WIDTH * 0.85, ITEM_WIDTH * 0.6];
  const MARGIN_TOP = [
    ITEM_WIDTH * 1.1 - ITEM_WIDTH * 0.85,
    ITEM_WIDTH * 0.85 - ITEM_WIDTH * 0.6,
    0,
  ];
  const height = LAYOUT[index % 3];
  const marginTop = -((index / 3).toFixed(0) % 2) * MARGIN_TOP[index % 3] + separator;
  const defaultStyle = { width: ITEM_WIDTH, height, marginTop, marginRight: separator };
  return <View style={[defaultStyle, itemStyle]}>{children}</View>;
};
ZigZagItem.propTypes = {
  index: PropTypes.number,
  marginHorizontal: PropTypes.number,
  separator: PropTypes.number,
  itemStyle: PropTypes.any,
  children: PropTypes.any,
};

export default ZigZagItem;
