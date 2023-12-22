import { Dimensions, StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { spacing } = Styles;
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        height: height * 0.2 - spacing.defaultSpacing * 1.5,
        justifyContent: 'center',
    }
});