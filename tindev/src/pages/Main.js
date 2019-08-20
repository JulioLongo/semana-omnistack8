import React from 'react';

import { View, Image, StyleSheet } from 'react-native';

import logo from '../assets/logo.png'

export default function Main(){
    return (
    <View style={styles.container}> 
        <Image source={logo} style={styles.logo}></Image>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f5f5f5',
        alignItems: 'center',
        justifyContent: 'space-between'
        padding: 30
    },

    logo:{
        height: 50,
        width: 50
    },

    input:{
        height: 46,
        alignSelf:'stretch',
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
        marginTop: 20,
        paddingHorizontal: 15,
    },

    button: {
        height: 46,
        alignSelf: 'stretch',
        backgroundColor: '#df4723',
        borderRadius: 4,
        marginTop: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText:{
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    }
});
