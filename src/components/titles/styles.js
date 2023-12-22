import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { colors, spacing } = Styles;

export const styles = StyleSheet.create({
    button: {
        padding: spacing.defaultSpacing / 2,
        backgroundColor: colors.highlightColor,
        marginVertical: spacing.defaultSpacing / 4,
    },
    title: {
        color: colors.defaultColor,
        textTransform: 'uppercase',
        fontWeight: 'bold',
        textAlign: 'center',
        letterSpacing: spacing.defaultSpacing / 3,
    }
});