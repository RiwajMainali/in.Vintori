import { stringLiteral } from '@babel/types';
import React, { ReactElement } from 'react';
import { ColorValue, View, ViewStyle } from 'react-native';

interface FrameProps {
    size: number,
    radius?: number,
    padding?: number,
    backgroundColor?: ColorValue,
    gradient?: string, // for help with the gradients see: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
    image?: string,
    shadow?: number,
    children?: React.ReactNode,
    style?: {}
};

const Frame: React.FC<FrameProps> = ({ size, radius, padding, backgroundColor, gradient, image, shadow, children, style }) => {
    return (
        <View style={{
            ...style,
            width: size || 100,
            height: size || 100,
            backgroundColor: backgroundColor || 'rgb(255, 0, 0)',
            //@ts-ignore
            backgroundImage: image || gradient || null,
            borderRadius: radius || 8,
            paddingTop: padding || 5,
            paddingRight: padding || 5,
            paddingBottom: padding || 5,
            paddingLeft: padding || 5,
            boxShadow: '0 2px 4px rgba(0, 0, 0,' + shadow || 0 + ')',
        }}>
            {children}
        </View>
    );
};

export default Frame;