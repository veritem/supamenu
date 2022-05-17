import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Dimensions } from 'react-native-web';
import { Rating } from 'react-native-ratings';

export default function Feedback() {
    return (
        <View style={styles.container}>
            <View style={[styles.mb,{marginTop: '20%'}]}>
                <Text style={styles.centered}>
          Yayy! {'\n'}
          We value all feedback,{'\n'}
          please rate your experience{'\n'}
          below:
                </Text>
            </View>
            <View style={styles.mb}>
                <Rating
                    type="custom"
                    ratingColor='#F7941D'
                    ratingImage={require('../../assets/star.png')}
                    ratingBackgroundColor='transparent'
                />
            </View>
            <View style={styles.mb}>
                <Text style={styles.centered}>
          Thank you for helping us{'\n'}
          improve our service !
                </Text>
            </View>
            <View style={styles.mb}>
                <Image source={require('../../assets/yellow-logo.svg')} style={styles.image} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    centered: {
        color: '#F7941D',
        fontFamily: 'Roboto_700Bold',
        fontSize: 20,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    container: {
        backgroundColor: '#000000',
        height: '100%',
        padding: '15%',
        width: '100%',
    },
    image: {
        height: 67,
        margin: 'auto',
        resizeMode: 'contain',
        width: 331
    },
    mb: {
        marginBottom: '30%',
    }
});
