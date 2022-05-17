import React from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
} from 'react-native';
import Colors from '../../../util/colors';
import { Button } from 'react-native-elements';


export const ListItem=({imgUrl,name})=>{
    return(
        <View style={styles.container}>
            <View style={styles.imageView}>
                <Image source={require('../../../assets/'+imgUrl)} style={styles.imageStyle}/>
            </View>
            <View style={styles.textDescView}>
                <Text style={styles.imgText}>{name}</Text>
            </View>
        </View>
    );
};
  
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginBottom:10,
        marginTop:25,
        width: '100%'
    },
    imageStyle:{
        height:80,
        width:150
    },
    imageView:{
        width: '50%',
    },
    imgText:{
        fontSize:20,
    },
    textDescView:{
        justifyContent: 'center',
        width: '50%'
    }
});
