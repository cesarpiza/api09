import React from 'react';
import { AntDesign } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import {
    Text,
    View,
} from 'react-native';
import Animated, { FadeInDown } from 'react-native-reanimated';
import { styles } from '../superHero/styles';
import { Styles } from '../../styles/theme';
const { colors } = Styles;

export default function Details({ data, title }) {
    return (
        <View>
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
        </View>
    );
}