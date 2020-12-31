import React, {useEffect} from 'react';
import {
  StatusBar,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {Button, ButtonOutline, Gap} from '../../components';
import {numberFormat} from '../../helpers';
import {colors, fonts} from '../../utils';

const DetailProduct = ({route, navigation}) => {
  const params = route.params;

  return (
    <View style={{backgroundColor: colors.white, flex: 1}}>
      <StatusBar backgroundColor={colors.primaryDark} translucent={false} />
      <TouchableOpacity
        style={{
          paddingStart: 40,
          paddingEnd: 20,
          paddingTop: 20,
          paddingBottom: 10,
        }}
        onPress={() => {
          navigation.goBack();
        }}>
        <Image
          source={require('../../assets/icon/ic_left_arrow.png')}
          style={{width: 24, height: 24}}
        />
      </TouchableOpacity>
      <ScrollView>
        <View
          style={{
            flexDirection: 'column',
            paddingStart: 40,
            paddingEnd: 20,
          }}>
          <Gap height={8} />
          <Text
            style={{
              fontFamily: fonts.primary[700],
              fontSize: 24,
              color: colors.text.default,
            }}>
            {params.data.name}
          </Text>
          <Gap height={4} />
          <Text
            style={{
              fontFamily: fonts.primary[600],
              fontSize: 15,
              color: colors.gray,
            }}>
            {params.data.category_name}
          </Text>
        </View>
        <Gap height={20} />
        <View style={{marginStart: 20, marginEnd: 20}}>
          <Image
            source={{uri: params.data.image}}
            style={{
              width: '90%',
              height: 320,
              resizeMode: 'cover',
              borderRadius: 8,
              alignSelf: 'center',
            }}
          />
          <Gap height={20} />
          <View style={{flexDirection: 'row', marginStart: 20, marginEnd: 20}}>
            <Text
              style={{
                flex: 1,
                fontFamily: fonts.primary[700],
                color: colors.primary,
                fontSize: 25,
              }}>
              {`Rp. ${numberFormat(params.data.price)}`}
            </Text>

            <Text
              style={{
                fontFamily: fonts.primary[700],
                color: colors.gray,
                alignSelf: 'center',
                fontSize: 12,
              }}>
              Ready stock
            </Text>
          </View>
          <Gap height={20} />
          <View style={{marginStart: 20, marginEnd: 20}}>
            <Text
              style={{
                fontFamily: fonts.primary[600],
                color: colors.gray,
                fontSize: 16,
              }}>
              Description
            </Text>
            <Gap height={8} />
            <Text
              style={{
                fontFamily: fonts.primary.normal,
                fontSize: 13,
                color: colors.text.default,
              }}>
              {params.data.description}
            </Text>
            <Gap height={30} />
            <View style={{flexDirection: 'row', flex: 1}}>
              <ButtonOutline title={'Add to cart'} />
              <Gap width={10} />
              <Button title={'Shop now'} />
            </View>
          </View>
        </View>
        <Gap height={30} />
      </ScrollView>
    </View>
  );
};

export default DetailProduct;

const styles = StyleSheet.create({});
