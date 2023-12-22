import React from 'react';
import { Feather } from '@expo/vector-icons';
import {
    ActivityIndicator,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native';
import { styles } from './styles';
import { Styles } from '../../styles/theme';
const { colors } = Styles;

export default function SearchSuperHeroInput(props) {

    const {
        inputValue,
        setInputValue,
        searchSuperHero,
        searchProgress,
    } = props;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.textInput}
                value={inputValue}
                onChangeText={text => setInputValue(text)}
                placeholder='Search your Superhero...'
            />
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    searchSuperHero();
                }}
            >
                {searchProgress ?
                    <ActivityIndicator size={28} color={colors.defaultColor} />
                    :
                    <Feather name="search" size={28} color={colors.defaultColor} />}
            </TouchableOpacity>
        </View>
    );
}