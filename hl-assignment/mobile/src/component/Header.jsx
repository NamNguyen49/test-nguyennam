import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Header = () => {
    return (
        <View style={styles.header}>
            <View style={styles.container}>
                <View style={styles.logoContainer}>
                    <Image
                        source={require('../../assets/logo.jpg')}
                        style={styles.logoImage}
                    />
                </View>

                <View style={styles.textContainer}>
                    <Text style={styles.textLine1}>Handcrafted by</Text>
                    <Text style={styles.textLine2}>Jim HLS</Text>
                </View>

                <View style={styles.avatarContainer}>
                    <Image
                        source={require('../../assets/avatar.jpg')}
                        style={styles.avatarImage}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ffffff',
        padding: 20,
    },


    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginTop: 40,
    },
    logoContainer: {
        flex: 1,
        alignItems: 'flex-start',
    },
    logoImage: {
        width: 60,
        height: 60,
    },
    textAvatarContainer: {
        flex: 1,
        alignItems: 'flex-end',
    },
    textContainer: {
        flexDirection: 'col',
        alignItems: 'center',
        marginRight: 5,
    },
    textLine1: {
        fontSize: 15,
        color: '#AFAFAF',
    },
    textLine2: {
        fontSize: 16,
        fontWeight: 'normal',
        marginLeft: 45,
    },
    avatarContainer: {
        alignItems: 'flex-end',
    },
    avatarImage: {
        width: 60,
        height: 60,
        borderRadius: 30,
    },

});

export default Header;
