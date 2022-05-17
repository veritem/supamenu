import React from 'react';
import { StyleSheet, View } from 'react-native';
import TextLogo from '../components/TextLogo';

export default function SplashScreen() {
    return (
        <View style={styles.container}>
            <TextLogo type="lander" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
    // flex: 1,
        height: '100%',
        width: '100%',
        backgroundColor: '#F7941D',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    textLogo: {
        fontSize: 24,
    },
});
