import React, { useEffect } from 'react';
import {
    Dimensions,
    Pressable,
    SafeAreaView,
    View,
} from 'react-native';
import { styles } from './styles';
import SearchResult from '../../components/searchResult';
import SuperHero from '../../components/superHero';
import Header from '../../components/header';
import { useGetSuperHeroes } from '../../hooks/useGetSuperHeroes';
import { Styles } from '../../styles/theme';
const { spacing } = Styles;
const { width, height } = Dimensions.get('window');

export default function Home() {

    const [getDataResult, searchSuperHero, inputValue, setInputValue, searchProgress, resultData, setResultData, data] = useGetSuperHeroes();

    const SearchSuperHeroInputItems = {
        inputValue,
        setInputValue,
        searchSuperHero,
        searchProgress,
    }

    const resultDataItems = {
        resultData,
        getDataResult,
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header setResultData={setResultData} SearchSuperHeroInputItems={SearchSuperHeroInputItems} />
            {data.length !== 0 ?
                <Pressable onPress={() => { setResultData([]) }}>
                    <SuperHero setResultData={setResultData} data={data} />
                </Pressable>
                :
                <Pressable onPress={() => {
                    setResultData([]);
                }}>
                    <View
                        style={{
                            width,
                            left: -spacing.defaultSpacing * 2,
                            height: height * 0.8,
                        }}
                    />
                </Pressable>
            }
            {resultData.length !== 0 && <SearchResult  {...resultDataItems} />}

        </SafeAreaView>
    );
}