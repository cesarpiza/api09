import React, { useEffect, useRef, useState } from 'react';
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View,
    Animated,
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles/theme';
const { spacing, size } = Styles;
const { height } = Dimensions.get('window');

export default function SearchResult(props) {

    const {
        resultData,
        getDataResult,
    } = props;

    const scrollY = useRef(new Animated.Value(0)).current;
    const [scrollViewHeight, setScrollViewHeight] = useState({
        item: 0,
        scrollViewHeight: 0,
    });
    const barHeight = 100;

    const animatedStyle = scrollY.interpolate({
        inputRange: [0, resultData.length > 3 ? scrollViewHeight.scrollViewHeight - scrollViewHeight.item : 0],
        outputRange: [0, scrollViewHeight.item - barHeight],
        extrapolate: 'clamp',
    })

    return (
        <View
            onLayout={({ nativeEvent }) => {
                setScrollViewHeight(prev => ({ ...prev, item: nativeEvent.layout.height }))
            }}
            style={{
                position: 'absolute',
                width: '100%',
                alignSelf: 'center',
                top: height * 0.2,
                height: size.superHeroImageHeight * 3 + spacing.defaultSpacing * 2,
            }}
        >
            <Animated.ScrollView
                showsVerticalScrollIndicator={false}
                onContentSizeChange={(_, height) => {
                    setScrollViewHeight(prev => ({ ...prev, scrollViewHeight: height }));
                }}
                onScroll={Animated.event(
                    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
                    { useNativeDriver: true }
                )}
                contentContainerStyle={{
                    backgroundColor: 'rgba(120, 120, 120,0.75)',
                    padding: spacing.defaultSpacing / 2,
                    gap: spacing.defaultSpacing / 2,
                }}
            >
                {resultData.map((item, index) => {
                    return (
                        <TouchableOpacity
                            style={styles.button}
                            key={String(index)}
                            onPress={() => {
                                getDataResult(item.id);
                            }}
                        >
                            <View
                                style={styles.container}
                            >
                                <Image
                                    style={styles.image}
                                    source={{ uri: item.image.url }}
                                />
                                <Text style={styles.name}>{item.name}</Text>
                            </View>
                        </TouchableOpacity>
                    )
                })}
            </Animated.ScrollView>
            {resultData.length > 3 && < Animated.View style={{
                transform: [
                    {
                        translateY: animatedStyle
                    }
                ],
                position: 'absolute',
                backgroundColor: 'red',
                right: 0,
                width: spacing.defaultSpacing / 2,
                height: barHeight,
            }} />}
        </View >
    );
}