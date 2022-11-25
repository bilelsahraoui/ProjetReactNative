import React from 'react';
import {SafeAreaView, View, StyleSheet, Image} from 'react-native';
import {Link} from 'react-router-native';

const defaultLayout = ({children}) => {
  return (
    <SafeAreaView style={styles.page}>
      {children}
      <View style={styles.navigation}>
        <View style={styles.navbar}>
          <Link to="/">
            <Image
              source={require('../../assets/images/home.png')}
              style={styles.image}
            />
          </Link>
          <Link to="/montures">
            <Image
              source={require('../../assets/images/mount.png')}
              style={styles.image}
            />
          </Link>
          <Link to="/search">
            <Image
              source={require('../../assets/images/search.png')}
              style={styles.image}
            />
          </Link>
          <Link to="/infos">
            <Image
              source={require('../../assets/images/info.png')}
              style={styles.image}
            />
          </Link>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  page: {
    flex: 1,
  },
  navigation: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'flex-end',
    justifyContent: 'center',
    marginBottom: 25,
  },
  navbar: {
    zIndex: 99,
    padding: 20,
    width: 340,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 20,
    backgroundColor: '#EFEFEF',
  },
  image: {
    height: 25,
    width: 25,
  },
});

export default defaultLayout;
