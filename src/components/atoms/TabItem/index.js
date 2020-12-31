import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {
  IconCart,
  IconCartActive,
  IconChat,
  IconChatActive,
  IconHome,
  IconHomeActive,
  IconOrder,
  IconOrderActive,
  IconProfile,
  IconProfileActive,
} from '../../../assets';
import {colors, fonts} from '../../../utils';

const TabItem = ({title, active, onPress, onLongPress}) => {
  const Icon = () => {
    if (title === 'Home') {
      return active ? <IconHomeActive /> : <IconHome />;
    }
    if (title === 'Pesanan') {
      return active ? <IconOrderActive /> : <IconOrder />;
    }
    if (title === 'Keranjang') {
      return active ? <IconCartActive /> : <IconCart />;
    }
    if (title === 'Pesan') {
      return active ? <IconChatActive /> : <IconChat />;
    }
    if (title === 'Profil') {
      return active ? <IconProfileActive /> : <IconProfile />;
    }
    return <IconHome />;
  };

  return (
    <TouchableOpacity
      style={styles.container}
      onPress={onPress}
      onLongPress={onLongPress}>
      <View style={styles.tabItem}>
        <Icon />
        <Text style={styles.text(active)}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default TabItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  tabItem: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  text: (active) => ({
    fontSize: 11,
    color: active ? colors.text.menuActive : colors.text.menuInactive,
    fontFamily: fonts.primary[600],
    marginTop: 3,
  }),
});
