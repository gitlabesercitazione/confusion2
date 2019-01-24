import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    SafeAreaView,
    TextInput,
    Platform,
    StatusBar,
    ScrollView,
    Image,
    Dimensions
} from "react-native";
import Icon from 'react-native-vector-icons/Ionicons'
import Category from '../components/Explore/Category'
import Home from '../components/Explore/Home';
import GeolocationExample from '../screens/GeolocationExample';

const { height, width } = Dimensions.get('window')
class Explore extends Component {
    constructor() {
        super();
      }
    componentWillMount() {
        this.startHeaderHeight = 80
        if (Platform.OS == 'android') {
            this.startHeaderHeight = 100 + StatusBar.currentHeight
        }
        
    }
 

    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
      
    {/* 
                    <View style={{ height: this.startHeaderHeight, backgroundColor: 'white', borderBottomWidth: 1, borderBottomColor: '#dddddd' }}>
                        <View style={{
                            flexDirection: 'row', padding: 10,
                            backgroundColor: 'white', marginHorizontal: 20,
                            shadowOffset: { width: 0, height: 0 },
                            shadowColor: 'black',
                            shadowOpacity: 0.2,
                            elevation: 1,
                            marginTop: Platform.OS == 'android' ? 30 : null
                        }}>
                            <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
                            <TextInput
                                underlineColorAndroid="transparent"
                                placeholder="Cerca un ristorante"
                                placeholderTextColor="grey"
                                style={{ flex: 1, fontWeight: '700', backgroundColor: 'white' }}
                            />
                        </View>
                    </View> */}
                    <ScrollView
                        scrollEventThrottle={16}
                    >
                        <View style={{ flex: 1, backgroundColor: 'white', paddingTop: 20 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                Cosa cerchi?
                            </Text>

                            <View style={{ height: 220, marginHorizontal: 20 }}>
                                <ScrollView
                                    horizontal={true}
                                    showsHorizontalScrollIndicator={false}
                                >
                                    <Category imageUri={require('../assets/pizzeria.jpg')}
                                        name="Pizzeria" style={{width:200, height: 200}}
                                    />
                                    <Category imageUri={require('../assets/ristorante.jpg')}
                                        name="Ristorante italiano"
                                    />
                                    {/* <Category imageUri={require('../assets/restaurant.jpg')} */}
                                        {/* name="Ristorante etnico" */}
                                    {/* /> */}
                                </ScrollView>
                            </View>
                            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                                <Text style={{ fontSize: 24, fontWeight: '700' }}>
                                     In evidenza
                                </Text>
                                <Text style={{ fontWeight: '100', marginTop: 10 }}>

                                </Text>
                                <View style={{ width: width - 40, height: 200, marginTop: 20 }}>
                                    <Image
                                        style={{ flex: 1, height: null, width: null, resizeMode: 'cover', borderRadius: 5, borderWidth: 1, borderColor: '#dddddd' }}
                                        source={require('../assets/restaurant.jpg')}
                                    />
                                    <Text style={{ fontWeight: '100', marginTop: 10 }}>
                                        Ristorante Napoli
                                    </Text>
                                </View>
                            </View>
                        </View>
                        <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                I più popolari
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                    name="Pizzeria Da Gennaro"
                                    type="PIZZERIA"
                                    img={require('../assets/pizzeriaGennaro.jpg')}
                                    price={22}
                                    rating={4}
                                />
                                <Home width={width}
                                    name="Pizzeria La Smorfia"
                                    type="PIZZERIA"
                                    price={31}
                                    rating={5}
                                    img={require('../assets/pizzeriaSmorfia.jpg')}
                                />
                                <Home width={width}
                                    name="Pizzeria Venezia"
                                    type="PIZZERIA"
                                    price={25}
                                    rating={3}
                                    img={require('../assets/pizzeriaVenezia.jpg')}
                                />


                            </View>
                        </View>
                    </ScrollView>

            </SafeAreaView>
        );
    }
}
export default Explore;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});