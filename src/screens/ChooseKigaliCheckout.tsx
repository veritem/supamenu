import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

let height = Dimensions.get('window').height;
let width = Dimensions.get('window').width;

export default function ChooseKigaliCheckout() {
    const products = [
        {
            id: 1,
            name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
            author: 'Tom Yummy - 12.5',
            price: 'FRW 5000',
            amount: 2,
        },
        {
            id: 2,
            name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
            author: 'Tom Yummy',
            price: 'FRW 5000',
            amount: 2,
        },
        {
            id: 3,
            name: 'Kalfir Lime Vodka, Lemongrass, Ginger, Citrus',
            author: 'Tom Yummy',
            price: 'FRW 5000',
            amount: 2,
        },
    ];
    return (
        <ScrollView style={styles.container}>
            <StatusBar style="dark" />
            <Text style={styles.headerText}>Choose Kigali</Text>
            <Text style={styles.subheaderText}>Drinks</Text>

            <View style={styles.productsContainer}>
                {products.map((product) => {
                    return (
                        <View key={product.id} style={styles.product}>
                            <View></View>
                            <View>
                                <Text style={styles.productName}>{product.name}</Text>
                                <Text style={styles.productAuthor}>{product.author}</Text>
                                <View style={styles.priceContainer}>
                                    <Text style={styles.productPrice}>{product.price}</Text>
                                    <View style={styles.priceActions}>
                                        <Icon name="minus" size={18} color="rgb(247,148,29)" />
                                        <Text style={styles.priceAmount}>{product.amount}</Text>
                                        <Icon name="plus" size={18} color="rgb(247,148,29)" />
                                    </View>
                                </View>
                            </View>
                        </View>
                    );
                })}
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginVertical: 20,
                }}
            >
                <Text style={{ marginRight: 10 }}>More drinks</Text>
                <Icon name="arrow-right" size={25} color="rgb(247,148,29)" />
            </View>
            <View
                style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}
            >
                <Text>Total</Text>
                <Text style={styles.productPrice}>FRW 16,000</Text>
            </View>

            <View
                style={{
                    backgroundColor: 'rgb(247,148,29)',
                    borderRadius: 20,
                    paddingVertical: 20,
                    marginTop: 20,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginBottom: 10,
                }}
            >
                <Text style={{ color: '#fff', textAlign: 'center' }}>
          Proceed to checkout
                </Text>
            </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        height: (height * 90) / 100,
        padding: 10,
        width,
    },
    headerText: {
        color: '#000',
        fontSize: 26,
        fontWeight: '900',
        textAlign: 'right',
    },
    priceActions: {
        alignItems: 'center',
        display: 'flex',
        flexDirection: 'row',
    },
    priceAmount: {
        fontSize: 20,
        marginHorizontal: 10,
    },
    priceContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    product: {
        backgroundColor: 'rgb(248,248,251)',
        borderRadius: 20,
        marginTop: 20,
        padding: 20,
    },
    productAuthor: {
        color: 'black',
        fontWeight: 'bold',
        marginVertical: 8,
    },
    productName: {
        color: 'grey',
    },
    productPrice: {
        color: 'rgb(247,148,29)',
        fontWeight: 'bold',
    },
    productsContainer: {},
    subheaderText: {
        color: '#F7941D',
        fontSize: 30,
        textAlign: 'right',
    },
});
