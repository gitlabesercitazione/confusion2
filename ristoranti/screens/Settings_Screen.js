import React, { Component } from 'react';
import {
  ScrollView,
  View,
  Text,
  StyleSheet
} from 'react-native';
import { connect } from 'react-redux';
import {
  RkText,
  RkTextInput,
  RkAvoidKeyboard,
  RkTheme,
  RkStyleSheet
} from 'react-native-ui-kitten';


import { Header } from 'react-navigation';
import { Button } from 'react-native-elements';
import { logoutUser, userDetailsFetch } from '../actions';
import firebase from 'firebase';
import Icon from 'react-native-vector-icons/Ionicons'

import users from './../data/raw/users';
import {Avatar} from './../components';
import {GradientButton} from './../components/';
import {FontAwesome} from './../assets/icons';
import LoadingSpinner from './../components/Loading/LoadingSpinner';



// FontAwesome.cog

class Settings_Screen extends Component {
    static navigationOptions = {
        drawerLabel: 'Profilo',
        drawerIcon: ({ tintColor }) => (
            <Icon name="ios-person-outline" color={tintColor} size={24} />
        ),
      };
  // Donot show header
  // static navigationOptions = {
  //   headerTitle: 'Profile Settings',
  //   tabBarIcon: ({ tintColor }) => (
  //     <RkText
  //       rkType='awesome'
  //       style={{
  //         color: tintColor,
  //         fontSize: 24,
  //         marginBottom: 0,
  //       }}>
  //         {FontAwesome.cog}
  //     </RkText>
  //   ),
  // };

  constructor(props) {
    super(props);
    this.user = firebase.auth().currentUser;
    this.props.state = {
      flaglogin :true
    }
    console.log(" oggetto : ");
    console.log(this.user);
    console.log(this.props);

    this.state = {
      firstName: this.user.firstName,
      lastName: this.user.lastName,
      email: this.user.email,
      phone: this.user.phone,
    } 
  }

  componentWillMount() {
    this.props.userDetailsFetch();
    console.log('userdetails');
    console.log(this.props.userdetails);
    if ( this.props.userdetails ) {
      const {myfirstname} = this.props.userdetails;
      this.setState({ firstName: myfirstname });
    }
  }

  render() {
    console.log('userdetails');
    console.log(this.user.email);
    console.log('RkTheme.current.colors.accent = ' + RkTheme.current.colors.acc);
    console.log('RkTheme.current.colors.alterBackground = ' + RkTheme.current.colors.alterBackground);
    if ( this.user ) {
      var {firstname, lastname, email, phone} = this.user;
    }
    return (
      <ScrollView style={styles.root}>
        <RkAvoidKeyboard>
          <LoadingSpinner />
          <View style={styles.header}>
            <Avatar img={require('./../data/img/smiley.jpg')} rkType='big'/>
          </View>
          <View style={styles.section}>
            <View style={[styles.row, styles.heading]}>
              <RkText rkType='header6 primary'>INFO</RkText>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Nome'
                           value={firstname}
                           rkType='right clear'
                           onChangeText={(text) => this.setState({firstName: text})}/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Cognome'
                           value={lastname}
                           onChangeText={(text) => this.setState({lastName: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Email'
                           value={email}
                           onChangeText={(text) => this.setState({email: text})}
                           rkType='right clear'/>
            </View>
            <View style={styles.row}>
              <RkTextInput label='Telefono'
                           value={phone}
                           onChangeText={(text) => this.setState({phone: text})}
                           rkType='right clear'/>
            </View>

          </View>

          <GradientButton
            rkType='large'
            style={styles.button}
            text='Logout'
            onPress={ () => this.props.logoutUser()  }
          />
        </RkAvoidKeyboard>
      </ScrollView>
    );
  }
}

let styles = RkStyleSheet.create(theme => ({
  root: {
    backgroundColor: theme.colors.screen.base
  },
  header: {
    backgroundColor: theme.colors.screen.neutral,
    paddingTop: 25
  },
  section: {
    marginVertical: 25
  },
  heading: {
    paddingBottom: 12.5
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 17.5,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderColor: theme.colors.border.base,
    alignItems: 'center'
  },
  button: {
    marginHorizontal: 16,
    marginBottom: 32
  }
}));

const mapStateToProps = ({ userdata }) => {
  console.log("prova =======================> ");
  const { userdetails } = userdata;
  return { userdetails };
};

export default connect(mapStateToProps, {
  logoutUser, userDetailsFetch
})(Settings_Screen);
