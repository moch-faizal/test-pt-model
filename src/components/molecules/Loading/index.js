import React from 'react';
import {ActivityIndicator, StyleSheet, Text, View} from 'react-native';
import {colors, fonts} from '../../../utils';

const Loading = () => {
   return (
      <View style={styles.wrapper}>
         <View style={styles.background}>
            <ActivityIndicator size="large" color={colors.primary} />
            <Text style={styles.text}>Loading...</Text>
         </View>
      </View>
   );
};

export default Loading;

const styles = StyleSheet.create({
   wrapper: {
      flex: 1,
      width: '100%',
      height: '100%',
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: colors.transparentBlack,
   },
   background: {
      backgroundColor: colors.white,
      borderRadius: 10,
      padding: 30,
      shadowColor: '#000',
      shadowOffset: {width: 0, height: 1},
      shadowOpacity: 0.8,
      shadowRadius: 2,
      elevation: 5,
   },
   text: {
      fontSize: 18,
      color: colors.primary,
      fontFamily: fonts.primary[600],
      marginTop: 16,
   },
});
