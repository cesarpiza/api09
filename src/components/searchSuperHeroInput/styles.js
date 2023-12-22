import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { colors, spacing } = Styles;

export const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
    },
    textInput: {
        flex: 0.75,
        padding: spacing.defaultSpacing,
        fontSize: 22,
        backgroundColor: colors.defaultColor,
        borderTopLeftRadius: spacing.borderRadiusSpacing,
        borderBottomLeftRadius: spacing.borderRadiusSpacing,
    },
    button: {
        borderTopRightRadius: spacing.borderRadiusSpacing,
        borderBottomRightRadius: spacing.borderRadiusSpacing,
        flex: 0.25,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: colors.highlightColor,
    }
});