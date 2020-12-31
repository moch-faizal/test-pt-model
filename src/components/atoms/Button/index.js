import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const Button = ({onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={props.disabled}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    flex: 1,
    padding: 10,
    borderRadius: 6,
    minHeight: 50,
    backgroundColor: colors.primary,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.white,
  },
});
