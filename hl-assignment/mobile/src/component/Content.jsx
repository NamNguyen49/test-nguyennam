import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Content = () => {
    return (
        <View style={styles.content}>
            <Text style={styles.textLine1}>A joke a day keeps the doctor away</Text>
            <Text style={styles.textLine2}>If you joke the wrong way,your teeth have to pay.(Serious)           </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    content: {
        backgroundColor: '#29B363',
        alignItems: 'center',
        justifyContent: 'center',
        height: '23%',
    },
    textLine1: {
        fontSize: 21,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',
        paddingBottom: 10,

    },
    textLine2: {
        fontSize: 13,
        fontWeight: 'normal',
        color: 'white',
        textAlign: 'center',

    },
});

export default Content;
