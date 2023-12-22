import { Dimensions, StyleSheet } from 'react-native';
import {
    Styles
} from '../../styles/theme';
const { colors, spacing } = Styles;
const { height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.background,
        padding: spacing.defaultSpacing * 2,
    },
});