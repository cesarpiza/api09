import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { colors, spacing } = Styles;

export const styles = StyleSheet.create({
    container: {
        marginBottom: spacing.defaultSpacing,
    },
    title: {
        color: colors.defaultColor,
        textAlign: 'center',
        fontSize: 34,
        textTransform: 'capitalize',
        fontWeight: 'bold',
    },
    lastTitle: {
        color: colors.highlightColor,
    }
});