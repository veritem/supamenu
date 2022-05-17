import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Icon,
    Image,
    FlatList,
} from 'react-native';
import Colors from '../../util/colors';
import { Button } from 'react-native-elements';
import { ListItem } from '../components/screens/Checkout';

export default function CheckoutScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.summary}>
                <View style={styles.backIconView}>
                    <Button
                        buttonStyle={styles.backBtn}
                        icon={{
                            name: 'chevron-left',
                            size: 40,
                            color: Colors.green,
                        }}
                        title=""
                    />
                </View>
                <View style={styles.textSummaryView}>
                    <View style={styles.checkoutPayOptionView}>
                        <Text style={styles.checkoutText}>Checkout</Text>
                        <Image source={require('../../assets/visa.png')} style={styles.visaIcon}/>
                    </View>
                    <View style={styles.amountDescView}>
                        <Text style={styles.amountText}>Frw 16,000</Text>
                        <Text style={styles.includeVatText}>Including VAT (18%)</Text>
                    </View>
                </View>
                <View style={styles.options}>
                    <View style={styles.creditOptionView}>
                        <Text style={styles.creditOptionText}>Credit Card</Text>
                    </View>
                    <View style={styles.momoOptionView}>
                        <Text style={styles.momOptionText}>Mobile & Cash</Text>
                    </View>
                </View>
            </View>

            <View style={styles.listView}>
                <FlatList
                    data={[
                        { key: 'MOMO', name: 'MTN Mobile Money', imageUrl: 'momo.png' },
                        { key: 'AIRTEL', name: 'Airtel Money', imageUrl: 'airtel.png' },
                        { key: 'CASH', name: 'Cash', imageUrl: 'cash.png' },
                    ]}
                    renderItem={({ item }) => (
                        <ListItem name={item.name} imgUrl={item.imageUrl} />
                    )}
                />
            </View>

            <View style={styles.proceedView}>
                <Text style={styles.assText}>
          We will send you an order details to your email after the successfull
          payment
                </Text>

                <View style={styles.bottomTools}>
                    <Button
                        title="Pay for the order"
                        buttonStyle={styles.payButton}
                        icon={{
                            name: 'lock',
                            size: 30,
                            color: '#FFFF',
                        }}
                    >
                        <Text style={styles.payButtonText}>Pay for the order</Text>
                    </Button>
                    <View style={styles.btmLine}></View>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    amountDescView: {
        marginLeft: 45,
    },
    amountText: {
        color: Colors.green,
        fontSize: 20,
    },
    assText: {
        fontSize: 15,
        marginBottom: 10,
        marginTop: 10,
    },
    backBtn: {
        backgroundColor: 'white',
        borderRadius: 10,
    },
    backIconView: {
        backgroundColor: '#FFFFF',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        marginLeft: 10,
        marginTop: 10,
    },
    bottomTools: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 400,
    },
    btmLine: {
        backgroundColor: 'black',
        borderRadius: 10,
        fontWeight: 'bold',
        height: 7,
        marginTop: 10,
        width: 200,
    },
    checkoutPayOptionView:{
        flexDirection: 'row',
        flexWrap: 'wrap'
    },
    checkoutText: {
        fontSize: 25,
        fontWeight: 'bold',
        marginLeft: 10,
    },
    container: {
        display: 'flex',
        height: '100%',
        width: '100%',
    },
    creditOptionText: {
        fontSize: 15,
        fontWeight: 'bold',
    },
    creditOptionView: {
        alignItems: 'center',
        backgroundColor: '#FFFF',
        borderRadius: 20,
        justifyContent: 'center',
        padding: 20,
    },
    includeVatText: {
        fontSize: 15,
        fontWeight: 'light',
    },
    listView: {
        marginTop: 60,
        paddingLeft: 30,
    },
    momOptionText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    momoOptionView: {
        backgroundColor: Colors.green,
        justItems: 'center',
        justifyContent: 'center',
        paddingLeft: 20,
    },
    options: {
        backgroundColor: Colors.green,
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        height: 70,
        marginBottom: -30,
        marginLeft: 30,
        marginRight: 30,
        width: 300,
    },
    payButton: {
        alignItems: 'center',
        backgroundColor: Colors.green,
        borderRadius: 15,
        borderWidth: 1,
        flexDirection: 'row',
        height: 60,
        justifyContent: 'center',
        marginTop: 15,
        padding: '3%',
        width: 350,
    },
    payButtonText: {
        color: '#FFFFFF',
        fontSize: 15,
        fontWeight: 'bold',
    },
    proceedView: {
        justifyContent: 'center',
        textAlign: 'center',
    },
    summary: {
        backgroundColor: '#FFFF',
        borderRadius: 50,
        borderWidth: 0.5,
        marginRight: '10%',
        shadowColor: Colors.green,
        shadowOpacity: 1,
        shadowRadius: 10,
        width: '90%',
    },
    textSummaryView: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        paddingBottom: 40,
        paddingTop: 10,
    },
    visaIcon:{
        height: 20,
        marginLeft:5,
        marginTop: 12,
        width: 30
    },
});
