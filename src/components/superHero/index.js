import React, { useRef, useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    Dimensions,
    Image,
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { styles } from './styles';
import Titles from '../titles';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { Styles } from '../../styles/theme';
const { spacing, colors } = Styles;
const { width } = Dimensions.get('window');

export default function SuperHero({ data, setResultData }) {

    const scrollRef = useRef(null);
    const [title, setTitle] = useState('');

    const {
        name,
        image,
    } = data;

    function getDetails(value, title) {
        if (value === 'next') {
            scrollRef.current.scrollTo({
                x: width - spacing.defaultSpacing * 4,
                animated: true,
            })
            setTitle(title);
        } else {
            scrollRef.current.scrollTo({
                x: -width - spacing.defaultSpacing * 4,
                animated: true,
            })
            setTitle('');
        }
    }

    return (
        <ScrollView
            showsHorizontalScrollIndicator={false}
            ref={scrollRef}
            horizontal
            scrollEnabled={false}
        >
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={{ uri: image?.url }}
                />
                <Text style={styles.name}>{name}</Text>
                <Titles setResultData={setResultData} getDetails={getDetails} title={'powerstats'} />
                <Titles setResultData={setResultData} getDetails={getDetails} title={'biography'} />
                <Titles setResultData={setResultData} getDetails={getDetails} title={'appearance'} />
                <Titles setResultData={setResultData} getDetails={getDetails} title={'connections'} />
            </View>
            <View style={styles.detailsContainer}>
                <ScrollView>
                    {title === 'powerstats' && <Animated.View entering={FadeInDown.duration(1000)} style={styles.itemContainer}>
                        <Text style={styles.title}>powerstats</Text>
                        {Object.keys(data.powerstats).map((key, index) => {
                            return (
                                <View key={String(index)} style={styles.powerstatsContainer}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <FontAwesome5 name="shield-alt" size={24} color={colors.highlightColor} />
                                        <Text style={styles.subTitle}>
                                            {key}:
                                        </Text>
                                    </View>
                                    <Text style={styles.value}>
                                        {data.powerstats[key] === 'null' ? 'uninformed' : data.powerstats[key]}
                                    </Text>
                                </View>
                            )
                        })}
                    </Animated.View>}
                    {title === 'biography' && <Animated.View entering={FadeInDown.duration(1000)} style={styles.itemContainer}>
                        <Text style={styles.title}>biography</Text>
                        {Object.keys(data.biography).map((key, index) => {
                            return (
                                <View key={String(index)} style={styles.biographyContainer}>
                                    <Text style={styles.connectionsSubTitle} >
                                        {key}:
                                    </Text>
                                    <Text style={styles.biographyValue}>
                                        {data.biography[key]}
                                    </Text>
                                </View>
                            )
                        })}
                    </Animated.View>}
                    {title === 'appearance' && <Animated.View entering={FadeInDown.duration(1000)} style={styles.itemContainer}>
                        <Text style={styles.title}>appearance</Text>
                        {Object.keys(data.appearance).map((key, index) => {
                            return (
                                <View key={String(index)} style={styles.powerstatsContainer}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <AntDesign name="star" size={24} color={colors.highlightColor2} />
                                        <Text style={styles.subTitle} key={String(index)}>
                                            {key}:
                                        </Text>
                                    </View>
                                    <Text style={styles.appearanceValue}>
                                        {Array.isArray(data.appearance[key]) ? data.appearance[key][1] : data.appearance[key]}
                                    </Text>
                                </View>
                            )
                        })}
                    </Animated.View>}
                    {title === 'connections' && <Animated.View entering={FadeInDown.duration(1000)} style={styles.itemContainer}>
                        <Text style={styles.title}>connections</Text>
                        {Object.keys(data.connections).map((key, index) => {
                            return (
                                <View key={String(index)} style={styles.connectionsContainer}>
                                    <View style={{
                                        flexDirection: 'row',
                                    }}>
                                        <Octicons name="dash" size={24} color={colors.highlightColor2} />
                                        <Text style={styles.connectionsSubTitle}>
                                            {key}:
                                        </Text>
                                    </View>
                                    <Text style={styles.connectionsValue}>
                                        {data.connections[key]}
                                    </Text>
                                </View>
                            )
                        })}
                    </Animated.View>}
                </ScrollView>
                <TouchableOpacity
                    style={styles.button}
                    onPress={() => {
                        getDetails('back');
                    }}
                >
                    <AntDesign name="arrowleft" size={34} color={colors.defaultColor} />
                </TouchableOpacity>
            </View >
        </ScrollView >
    );
}