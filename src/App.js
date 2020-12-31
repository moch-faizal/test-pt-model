import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {Provider, useSelector} from 'react-redux';
import {Loading} from './components';
import Router from './config/router';
import {store} from './redux';

const MainApp = () => {
  const stateGlobal = useSelector((state) => state);

  return (
    <NavigationContainer>
      <SafeAreaView style={styles.container}>
        <Router />
      </SafeAreaView>
      {stateGlobal.GeneralState.loading && <Loading />}
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={store}>
      <MainApp />
    </Provider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
