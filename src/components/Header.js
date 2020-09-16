
import React, { Component } from 'react';
import { AppRegistry, View, Image, StyleSheet ,Text} from 'react-native';
import Header from '../../component/Header';


class Header extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Wishlist Screen</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
    container: {
      paddingTop: 50,
    },
    tinyLogo: {
      width: 50,
      height: 50,
    },
    logo: {
      width: 66,
      height: 58,
    },
  });
