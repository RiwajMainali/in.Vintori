import React from 'react';
import {
    ColorValue,
    SafeAreaView,
    StyleSheet,
    View,
    FlatList,
    Image
} from 'react-native';
import Frame from './Frame';

interface ScrollingGridProps {
    size: number,
    data: any[],
    radius?: number,
    backgroundColor?: ColorValue
    gradient?: string, // for help with the gradients see: https://developer.mozilla.org/en-US/docs/Web/CSS/gradient/linear-gradient,
    children?: React.ReactNode,
    style?: {},
    numColumns: number,
    cellPadding: number,
    cellMargin: number,
};

const ScrollingFrame: React.FC<ScrollingGridProps> = ({ size, data, radius, backgroundColor, gradient, style, numColumns, cellPadding, cellMargin }) => {
    const childWidth = (size - (numColumns - 1) * cellPadding) / numColumns;
    const childHeight = childWidth;

    if (numColumns <= 1) {
        numColumns = 2;
    }
    return (
        <Frame radius={radius} backgroundColor={backgroundColor} gradient={gradient} style={style}>
            <FlatList
                data={data}
                numColumns={numColumns}
                columnWrapperStyle={{
                    alignItems: 'center',
                    justifyContent: 'flex-start',

                }}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => {
                    return (
                        <View style={{ width: childWidth, height: childHeight, padding: cellPadding, margin: cellMargin }}>
                            {item.element}
                        </View>
                    );
                }}
            />
        </Frame>
    );
};

export default ScrollingFrame;