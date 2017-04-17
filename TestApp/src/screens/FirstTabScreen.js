import React, {Component} from 'react';
import {
  Text,
  View,
  TouchableOpacity,
  StyleSheet,
  Alert,
  Image,
  Platform
} from 'react-native';
import {Navigation} from 'react-native-navigation';

export default class FirstTabScreen extends Component {
  static navigatorButtons = {
    leftButtons: [{
      icon: require('../../img/navicon_menu.png'),
      id: 'menu'
    }],
    rightButtons: [
      {
        title: 'Edit',
        id: 'edit'
      },
      {
        icon: require('../../img/navicon_add.png'),
        id: 'add'
      }
    ]
  };
  static navigatorStyle = {
    navBarBackgroundColor: '#4dbce9',
    navBarTextColor: '#ffff00',
    navBarSubtitleTextColor: '#ff0000',
    navBarButtonColor: '#ffffff',
    statusBarTextColorScheme: 'light',
    tabBarBackgroundColor: '#4dbce9',
    tabBarButtonColor: '#ffffff',
    tabBarSelectedButtonColor: '#ffff00'
  };

  constructor(props) {
    super(props);
    // if you want to listen on navigator events, set this up
    this.props.navigator.setOnNavigatorEvent(this.onNavigatorEvent.bind(this));
  }

  onNavigatorEvent(event) {
    if (event.id === 'menu') {
      this.props.navigator.toggleDrawer({
        side: 'left',
        animated: true
      });
    }
    if (event.id === 'edit') {
      Alert.alert('NavBar', 'Edit button pressed');
    }
    if (event.id === 'add') {
      Alert.alert('NavBar', 'Add button pressed');
    }
  }

  render() {
    return (
      <View style={{flex: 1, padding: 20}}>
        <Text style={styles.button}>Click on affected part</Text>
        <TouchableOpacity style={styles.image} onPress={(evt) => this.onPushPress(evt) }>
          <Image style={styles.image} resizeMode='contain' source={require('../../img/Regions_of_Human_Body.jpg')}/>
        </TouchableOpacity>
      </View>
    );
  }

  onPushPress(evt) {
    let coordinates = [
      evt.nativeEvent.locationX,
      evt.nativeEvent.locationY,
    ];
    this.props.navigator.push({
      title: "Type & Severity",
      passProps: {coordinates: {coordinates}},
      screen: "example.PushedScreen",
    });
  }

}

const styles = StyleSheet.create({
  image: {
    alignSelf: 'center',
    width: 350,
    height: 350
  },
  button: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 10,
    marginTop: 10,
    color: 'blue'
  }
});
