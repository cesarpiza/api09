import React from 'react';
import {
    Text,
    TouchableOpacity,
} from 'react-native';
import { styles } from './styles';

export default function Titles({ title, getDetails, setResultData }) {

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={() => {
                getDetails('next', title);
                setResultData([]);
            }}
        >
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    );
}