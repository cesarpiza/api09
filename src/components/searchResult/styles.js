import { StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { colors, size, spacing } = Styles;

export const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.defaultColor,
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        width: size.superHeroImageWidth,
        height: size.superHeroImageHeight,
        resizeMode: 'cover',
    },
    name: {
        fontSize: 22,
        marginLeft: spacing.defaultSpacing,
    },
});