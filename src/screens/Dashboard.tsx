import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

export default function DashboardScreen() {
    return (
        <View style={styles.container}>
            <Text>Dashboard Screen</Text>
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
    textLogo: {
        fontSize: 24
    }
});