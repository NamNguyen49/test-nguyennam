import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native';

const Footer = () => {
    return (
        <View style={styles.footer}>
            <Text style={styles.textLine}>
                This website is created as part of Hlsolutions program. The materials contained on this website are provided for general information only and do not constitute any form of advice. HLS assumes no responsibility for the accuracy of any particular statement and accepts no liability for any loss or damage which may arise from reliance on the information contained on this site.
            </Text>
            <Text style={styles.copyright}>
                Copyright 2021 HLS
            </Text>
        </View>
    );
};

const styles = StyleSheet.create({
    footer: {
        alignItems: 'center',
        justifyContent: 'center',
        height: '15%',
        paddingBottom: 45,
    },
    textLine: {
        fontSize: 10,
        color: 'grey',
        textAlign: 'center',
    },
    copyright: {
        fontSize: 14,
        color: 'black',
        textAlign: 'center',
    },
});

export default Footer;
