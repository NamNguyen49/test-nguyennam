import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Story = () => {
    return (
        <View style={styles.story}>
            <Text style={styles.storyText}>
                A child asked his father, "How were people born?" So his father said, "Adam and Eve made babies, then their babies became adults and made babies, and so on." The child then went to his mother, asked her the same question and she told him, "We were monkeys then we evolved to become like we are now." The child ran back to his father and said, "You lied to me!" His father replied, "No, your mom was talking about her side of the family."
            </Text>

            <View style={styles.buttonContainer}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText}>This is a Funny!</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.button2}>
                    <Text style={styles.buttonText}>This is not a funny.</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    story: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        height: '50%',
    },
    storyText: {
        fontSize: 14,
        color: '#646464',
        marginLeft: 30,
        marginRight: 30,

        paddingBottom: 100,
    },

    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'center',

    },
    buttonText: {
        color: 'white',
    },
    button: {
        backgroundColor: '#2C7EDB',
        color: 'white',
        margin: 10,
        width: '35%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },

    button2: {
        backgroundColor: '#29B363',
        color: 'white',
        margin: 10,
        width: '34%',
        padding: 10,
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default Story;
