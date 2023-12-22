import { useEffect, useRef, useState } from "react";
import { baseUrl, accessToken } from '../store/apiData';

export function useGetSuperHeroes() {

    const [inputValue, setInputValue] = useState('');
    const [searchProgress, setSearchProgress] = useState(false);
    const [resultData, setResultData] = useState([]);
    const [data, setData] = useState([]);
    const lastValue = useRef('');
    const controller = useRef(new AbortController());

    async function searchSuperHero() {
        if (inputValue === '') {
            alert('Please, enter...');
        } else {
            if (lastValue.current !== inputValue || resultData.length === 0) {
                controller.current = new AbortController();
                const signal = controller.current.signal;
                setSearchProgress(true);
                try {
                    const response = await fetch(`${baseUrl}${accessToken}/search/${inputValue}`, { signal });
                    const data = await response.json();
                    if (data.response === 'success') {
                        setResultData(data.results);
                    } else {
                        alert(data.error);
                    }
                } catch (error) {
                    console.log(error);
                } finally {
                    setSearchProgress(false);
                }
                lastValue.current = inputValue;
            }
        }
    }

    function getDataResult(id) {
        const getItem = resultData.filter((item) => item.id === id);
        setData({ ...getItem[0] });
        setResultData([]);
    }

    useEffect(() => {
        if (inputValue === '') {
            setResultData([]);
            lastValue.current = '';
        }
        controller.current.abort();
    }, [inputValue]);

    return [getDataResult, searchSuperHero, inputValue, setInputValue, searchProgress, resultData, setResultData, data];
}