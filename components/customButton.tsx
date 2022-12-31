import { BaseCallback } from "@tensorflow/tfjs-layers/dist/base_callbacks";
import React, { useState } from "react";
import { Pressable, Text, StyleSheet, TouchableOpacity, ViewStyle } from 'react-native';

type CustomButtonProps = {
    text: string | number;
    disabled?: boolean;
    onPress?: () => void;
    containerStyle?: ViewStyle;
};

export default function CustomButton /*(props: string) ({props: imageUrl}) */ ({
    text,
    onPress = () => null,
    containerStyle = {},
    disabled = false
}: CustomButtonProps) {
    return (
        /*<View style={styles.container}>
            <Text>henlo button</Text>
        </View>*/
        
        /*<button className={name}>
            <img src={imageUrl}/>
            
        </button>*/
        <TouchableOpacity style={[styles.button, containerStyle]}
        onPress={onPress}
        disabled={disabled}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    /*container: {
        marginTop: 50,
    },*/
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 50,
        height: 50,
        borderRadius: 3,
        borderWidth: 1,
        borderStyle: 'solid',
        borderColor: 'black',
    },
    text: {
        fontFamily: 'System',
        fontSize: 16,
        color: 'black',
        fontWeight: '400'
    },
    unSelected: {
        color: 'white'
    }
});