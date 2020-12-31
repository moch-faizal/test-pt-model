import React, {useEffect, useState} from 'react';
import {
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {useDispatch, useSelector} from 'react-redux';
import {Gap} from '../../components';
import {
  clearCategory,
  clearProduct,
  getCategory,
  getProduct,
} from '../../redux/actions';
import {colors, fonts} from '../../utils';
import {numberFormat} from '../../helpers';

const Home = ({navigation}) => {
  const stateGlobal = useSelector((state) => state);
  const dispatch = useDispatch();
  const [state, setState] = useState({
    filter: {
      category_id: 0,
    },
    categoryData: [],
    productData: [],
  });

  const updateState = (field, value) => {
    setState((prevState) => {
      return {...prevState, [field]: value};
    });
  };

  useEffect(() => {
    requestData();
    return () => {
      dispatch(clearCategory());
      dispatch(clearProduct());
    };
  }, []);

  const requestData = () => {
    dispatch(clearCategory());
    dispatch(getCategory());

    dispatch(clearProduct());
    dispatch(getProduct());
  };

  useEffect(() => {
    if (stateGlobal.Home.categoryData) {
      let data = stateGlobal.Home.categoryData
        ? stateGlobal.Home.categoryData
        : false;

      if (data) {
        updateState('categoryData', data);
      }
    }
  }, [stateGlobal.Home.categoryData]);

  useEffect(() => {
    if (stateGlobal.Home.productData) {
      let data = stateGlobal.Home.productData
        ? stateGlobal.Home.productData
        : false;

      if (data) {
        updateState('productData', data);
      }
    }
  }, [stateGlobal.Home.productData]);

  return (
    <View
      style={{
        flex: 1,
        flexGrow: 3,
        flexDirection: 'column',
        backgroundColor: colors.white,
      }}>
      <StatusBar backgroundColor={colors.transparent} translucent={true} />
      <LinearGradient
        start={{x: 0, y: 0}}
        end={{x: 1, y: 0}}
        colors={['#f36562', '#f46c5a', '#eb7b5c']}
        style={styles.bgHeader}>
        <View style={{flexDirection: 'row', flex: 1}}>
          <Text
            style={{
              flex: 1,
              color: colors.white,
              fontFamily: fonts.primary[800],
              fontSize: 24,
              textAlignVertical: 'center',
            }}>
            Hello, Customer!
          </Text>

          <Image
            source={require('../../assets/img/img_profile_placeholder.png')}
            style={{
              width: 45,
              height: 45,
              borderRadius: 45 / 2,
              resizeMode: 'cover',
              alignSelf: 'center',
            }}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            backgroundColor: colors.transparentBlack,
            paddingTop: 4,
            paddingBottom: 4,
            borderRadius: 8,
            alignItems: 'center',
          }}>
          <Image
            source={require('../../assets/img/icon_search.png')}
            style={{width: 24, height: 24, marginStart: 15}}
          />
          <TextInput
            style={{
              flex: 1,
              fontFamily: fonts.primary.normal,
              marginStart: 10,
              color: colors.white,
            }}
            placeholder={'Search product in here...'}
            placeholderTextColor={colors.white}
          />
        </View>
      </LinearGradient>
      <Gap height={20} />
      <Text
        style={{
          fontFamily: fonts.primary[700],
          fontSize: 16,
          marginStart: 20,
        }}>
        Category
      </Text>
      <Gap height={16} />
      {state.categoryData && (
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          style={{flex: 1, marginStart: 12}}>
          {state.categoryData.map((data, index) => {
            let image = require('../../assets/icon/ic_all.png');
            if (data.name == 'Chair') {
              image = require('../../assets/icon/ic_chair.png');
            } else if (data.name == 'Cupboard') {
              image = require('../../assets/icon/ic_cupboard.png');
            } else if (data.name == 'Lamp') {
              image = require('../../assets/icon/ic_lamp.png');
            } else if (data.name == 'Bed') {
              image = require('../../assets/icon/ic_bed.png');
            }

            return (
              <TouchableOpacity
                style={styles.bgCategory(data.class)}
                key={index}
                onPress={() => {
                  let boom = [];
                  let filter = {};
                  for (let i = 0; i < state.categoryData.length; i++) {
                    const element = state.categoryData[i];
                    if (element.name == data.name) {
                      element.class = 'active';
                      filter['category_id'] = element.id;
                    } else {
                      element.class = 'default';
                    }
                    boom.push(element);
                  }

                  updateState('categoryData', boom);
                  updateState('filter', filter);
                }}>
                <Image
                  source={image}
                  style={{width: 25, height: 25, alignSelf: 'center'}}
                />
                <Gap height={12} />
                <Text style={styles.textCategory(data.class)}>{data.name}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      )}

      {state.productData && (
        <ScrollView
          style={{
            flex: 1,
            flexGrow: 3.5,
            paddingStart: 20,
            paddingEnd: 20,
          }}>
          {state.filter.category_id > 0
            ? state.productData.map((data, index) => {
                if (state.filter.category_id == data.category_id) {
                  return (
                    <TouchableOpacity
                      style={{
                        flexDirection: 'row',
                        marginVertical: 10,
                        flex: 1,
                      }}
                      key={index}
                      onPress={() => {
                        navigation.navigate('DetailProduct', {
                          data: data,
                        });
                      }}>
                      <Image
                        source={{uri: data.image}}
                        style={{
                          width: 110,
                          height: 120,
                          resizeMode: 'cover',
                          borderRadius: 8,
                        }}
                      />
                      <View
                        style={{
                          flexDirection: 'column',
                          marginStart: 20,
                          flex: 1,
                        }}>
                        <Text
                          style={{
                            fontFamily: fonts.primary[700],
                            fontSize: 16,
                          }}>
                          {data.name}
                        </Text>
                        <Text
                          style={{
                            fontFamily: fonts.primary.normal,
                            fontSize: 12,
                            marginTop: 5,
                          }}>
                          {data.category_name}
                        </Text>
                        <Text
                          style={{
                            color: colors.text.default,
                            fontFamily: fonts.primary.normal,
                            fontSize: 10,
                            marginTop: 5,
                          }}
                          numberOfLines={2}
                          ellipsizeMode="tail">
                          {data.description}
                        </Text>

                        <Text
                          style={{
                            fontFamily: fonts.primary[700],
                            fontSize: 15,
                            marginTop: 13,
                            color: colors.primary,
                          }}>
                          {`Rp. ${numberFormat(data.price)}`}
                        </Text>
                      </View>
                    </TouchableOpacity>
                  );
                }
              })
            : state.productData.map((data, index) => {
                return (
                  <TouchableOpacity
                    style={{flexDirection: 'row', marginVertical: 10, flex: 1}}
                    key={index}
                    onPress={() => {
                      navigation.navigate('DetailProduct', {
                        data: data,
                      });
                    }}>
                    <Image
                      source={{uri: data.image}}
                      style={{
                        width: 110,
                        height: 120,
                        resizeMode: 'cover',
                        borderRadius: 8,
                      }}
                    />
                    <View
                      style={{
                        flexDirection: 'column',
                        marginStart: 20,
                        flex: 1,
                      }}>
                      <Text
                        style={{fontFamily: fonts.primary[700], fontSize: 16}}>
                        {data.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: fonts.primary.normal,
                          fontSize: 12,
                          marginTop: 5,
                        }}>
                        {data.category_name}
                      </Text>
                      <Text
                        style={{
                          color: colors.text.default,
                          fontFamily: fonts.primary.normal,
                          fontSize: 10,
                          marginTop: 5,
                        }}
                        numberOfLines={2}
                        ellipsizeMode="tail">
                        {data.description}
                      </Text>

                      <Text
                        style={{
                          fontFamily: fonts.primary[700],
                          fontSize: 15,
                          marginTop: 13,
                          color: colors.primary,
                        }}>
                        {`Rp. ${numberFormat(data.price)}`}
                      </Text>
                    </View>
                  </TouchableOpacity>
                );
              })}
        </ScrollView>
      )}
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  bgHeader: {
    height: 220,
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
    paddingTop: 20,
    paddingLeft: 30,
    paddingRight: 30,
    paddingBottom: 30,
  },
  bgCategory: (status) => ({
    minWidth: 90,
    height: 80,
    marginTop: 3,
    elevation: 5,
    shadowColor: colors.black,
    shadowRadius: 10,
    shadowOpacity: 1,
    padding: 12,
    marginHorizontal: 10,
    borderRadius: 8,
    backgroundColor: status == 'active' ? colors.primary : colors.white,
  }),
  textCategory: (status) => ({
    color: status == 'active' ? colors.white : colors.text.default,
    alignSelf: 'center',
    fontFamily: fonts.primary[600],
    fontSize: 12,
  }),
  buttonText: {
    fontSize: 18,
    fontFamily: 'Gill Sans',
    textAlign: 'center',
    margin: 10,
    color: '#ffffff',
    backgroundColor: 'transparent',
  },
});
