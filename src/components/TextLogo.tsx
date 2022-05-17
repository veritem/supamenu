import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TextLogo({size='lg', type='lander'}) {
    return (
        <View style={styles.container}>
            <View style={{display: 'flex', flexDirection: 'row'}}>
                <Text style={{...styles[`${size}`], ...styles.textBlack}}>Supa</Text>
                <Text style={{...styles[`${size}`], ...(type === 'lander' ? styles.textWhite : styles.textYellow)}}>Menu</Text>
            </View>
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
        justifyContent: 'center'
    },
    lg: {
        fontSize: 33
    },
    md: {
        fontSize: 24
    },
    sm: {
        fontSize: 18
    },
    textBlack: {
        color: 'white'  
    },
    textWhite: {
        color: 'black'
    },
    textYellow: {
        color: '#F7941D'
    },
    xs: {
        fontSize: 12
    }
});