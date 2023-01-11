import * as React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useSpring, animated } from 'react-spring';
import Animated from 'react-native-reanimated';

interface MyButtonProps {
    // Add any props that your component needs here
}

const MyButton: React.FC<MyButtonProps> = (props) => {
    const scale = new Animated.Value(1);

    const buttonPressed = () => {
        Animated.spring(scale, {
            toValue: 0.95,
            stiffness: 1000,
            damping: 50,
            mass: 3,
        }).start();
    }

    const buttonReleased = () => {
        Animated.spring(scale, {
            toValue: 1,
            stiffness: 1000,
            damping: 50,
            mass: 3,
        }).start();
    }

    return (
        <View style={styles.container}>
            <Animated.View style={[styles.button, {
                transform: [
                    { scale }
                ]
            }]}>
                <Text style={styles.label}>Press me</Text>
            </Animated.View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        alignItems: 'center'
    },
    button: {
        backgroundColor: '#841584',
        padding: 10,
        borderRadius: 1,
        zIndex: 1,
        position: 'absolute',
        top: 5,
        right: 5,
        height: 80,
        width: 80,
    },
    label: {
        color: '#fff',
        fontSize: 16
    }
});

export default MyButton;