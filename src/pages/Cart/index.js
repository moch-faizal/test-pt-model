import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Gap} from '../../components';
import LinearGradient from 'react-native-linear-gradient';
import CheckBox from '@react-native-community/checkbox';
import {colors, fonts} from '../../utils';

const Cart = () => {
  const [state, setState] = useState({
    checkAll: false,
    cartData: [],
  });

  const updateState = (field, value) => {
    setState((prevState) => {
      return {...prevState, [field]: value};
    });
  };

  return (
    <View style={{flex: 1, backgroundColor: colors.white}}>
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#f36562', '#f46c5a', '#eb7b5c']}
        style={styles.bgHeader}>
        <Text
          style={{
            flex: 1,
            textAlignVertical: 'bottom',
            alignSelf: 'center',
            fontFamily: fonts.primary[700],
            fontSize: 22,
            color: colors.white,
          }}>
          Shopping Cart
        </Text>
      </LinearGradient>
      <Gap height={12} />
      <View style={{flexDirection: 'row', marginStart: 16}}>
        <CheckBox
          disabled={false}
          tintColor={colors.primary}
          tintColors={{true: colors.primary}}
          value={state.checkAll}
          onValueChange={(newValue) => updateState('checkAll', newValue)}
        />

        <Text
          style={{
            fontFamily: fonts.primary[700],
            color: colors.text.default,
            alignSelf: 'center',
          }}>
          Check All
        </Text>
      </View>
      <ScrollView></ScrollView>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  bgHeader: {
    height: 160,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
});
