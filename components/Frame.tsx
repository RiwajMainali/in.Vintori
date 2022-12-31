import React from 'react';
import { ColorValue, View } from 'react-native';

interface FrameProps {
    radius?: number,
    backgroundColor?: ColorValue,
    gradient?: string, // for help with the gradients see: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient
    image?: string,
    shadow?: number,
    children?: React.ReactNode,
    style?: any
};

const Frame: React.FC<FrameProps> = ({ radius, backgroundColor, gradient, image, shadow, children, style }) => {
    return (
        <View style={{
            ...style,
            backgroundColor: backgroundColor || 'rgb(255, 0, 0)',
            //@ts-ignore
            backgroundImage: image || gradient || null,
            borderRadius: radius || 8,
            boxShadow: '0 2px 4px rgba(0, 0, 0,' + shadow || 0 + ')',
        }}>
            {children}
        </View>
    );
};

export default Frame;