import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export default function ChooseKigali() {
    const menuOptions = ['Appetizer', 'Starter', 'Main', 'Dessert', 'Drink'];
    return (
        <View style={styles.container}>
            <StatusBar style="light" />
            <Text style={styles.headerText}>Choose Kigali</Text>
            <View style={styles.topLayer}>
                <View style={styles.topLayerItem}>
                    <View style={styles.imageContainer}>
                        <Image
                            source={require('../../assets/chooseKigali/icon1.png')}
                            style={styles.topLayerImage}
                        ></Image>
                        <Text style={styles.imageText}>N8</Text>
                    </View>
                    <Text style={[styles.topLayerText, { fontWeight: '900' }]}>
            Ordered
                    </Text>
                </View>
                <View style={styles.verticalLine}></View>
                <View style={styles.topLayerItem}>
                    <Image
                        source={require('../../assets/chooseKigali/icon2.png')}
                        style={styles.topLayerImage}
                    ></Image>
                    <Text style={styles.topLayerText}>Call Waiter</Text>
                </View>
            </View>
            <View>
                <Text style={styles.subHeaderText}>menu</Text>
                <View style={styles.options}>
                    {menuOptions.map((opt) => {
                        return (
                            <View key={opt} style={styles.menuListItem}>
                                <Text style={styles.menuListItemText}>{opt}</Text>
                                <Icon name="angle-right" size={30} color="#fff" />
                            </View>
                        );
                    })}
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: 'rgb(0,0,0)',
        display: 'flex',
        height,
        justifyContent: 'center',
        width,
    },
    headerText: {
        color: '#F7941D',
        fontSize: 25,
        fontWeight: '900',
        textAlign: 'center',
    },
    imageContainer: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    imageText: {
        color: '#fff',
        fontSize: 25,
        marginLeft: 10,
    },
    menuListItem: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
        width: (width * 60) / 100,
    },
    menuListItemText: {
        color: '#ffffff',
        fontSize: 20,
    },
    options: {
        marginTop: 20,
    },
    subHeaderText: {
        color: '#F7941D',
        fontSize: 26,
        fontWeight: '900',
        textAlign: 'center',
    },
    topLayer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginVertical: 60,
        width: (width * 80) / 100,
    },
    topLayerImage: {
        height: 50,
        resizeMode: 'contain',
    },
    topLayerItem: {
        height: 80,
    },
    topLayerText: {
        color: '#fff',
        fontSize: 20,
        marginTop: 10,
        textAlign: 'center',
    },
    verticalLine: {
        backgroundColor: 'rgb(102,62,12)',
        width: 2,
    },
});
