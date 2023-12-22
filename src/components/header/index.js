import React from 'react';
import {
    Pressable,
    View
} from 'react-native';
import { styles } from './styles';
import SearchSuperHeroInput from '../searchSuperHeroInput';
import Title from '../title';

export default function Header({ SearchSuperHeroInputItems, setResultData }) {
    return (
        <View style={styles.container}>
            <Pressable onPress={() => { setResultData([]) }}>
                <Title />
            </Pressable>
            <SearchSuperHeroInput {...SearchSuperHeroInputItems} />
        </View>
    );
}