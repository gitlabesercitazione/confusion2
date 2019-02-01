import React, { Component } from "react";
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    SafeAreaView,
    Dimensions
} from "react-native";
import Home from '../components/Explore/Home';

const { height, width } = Dimensions.get('window')
import Card from './Card';
class Saved extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>

            <ScrollView>
            <Card/>
            {/* <View style={{ marginTop: 40 }}>
                            <Text style={{ fontSize: 24, fontWeight: '700', paddingHorizontal: 20 }}>
                                I preferiti
                            </Text>
                            <View style={{ paddingHorizontal: 20, marginTop: 20, flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                <Home width={width}
                                    name="Pizzeria Da Gennaro"
                                    type="PIZZERIA"
                                    img={require('../assets/pizzeriaGennaro.jpg')}
                                   
                                />
                                <Home width={width}
                                    name="Pizzeria La Smorfia"
                                    type="PIZZERIA"
                                    img={require('../assets/pizzeriaSmorfia.jpg')}
                                />
                                <Home width={width}
                                    name="Pizzeria Venezia"
                                    type="PIZZERIA"
                                    img={require('../assets/pizzeriaVenezia.jpg')}
                                />


                            </View>
                        </View> */}
                    </ScrollView>
                </SafeAreaView>
        );
    }
}
export default Saved;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    }
});