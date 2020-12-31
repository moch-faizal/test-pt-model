import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {colors} from '../../../utils/colors';
import {fonts} from '../../../utils/fonts';

const ButtonOutline = ({onPress, ...props}) => {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      disabled={props.disabled}>
      <Text style={styles.text}>{props.title}</Text>
    </TouchableOpacity>
  );
};

export default ButtonOutline;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    flex: 1,
    borderRadius: 6,
    minHeight: 50,
    backgroundColor: colors.white,
    borderColor: colors.primary,
    borderStyle: 'solid',
    borderWidth: 1,
  },
  text: {
    flex: 1,
    alignSelf: 'center',
    textAlign: 'center',
    fontFamily: fonts.primary[600],
    color: colors.primary,
  },
});
