import { Dimensions, StyleSheet } from 'react-native';
import { Styles } from '../../styles/theme';
const { colors, size, spacing } = Styles;
const { width, height } = Dimensions.get('window');

export const styles = StyleSheet.create({
    container: {
        //backgroundColor: '#555',
        height: height * 0.8 - spacing.defaultSpacing * 1.5,
        justifyContent: 'center',
        width: width - spacing.defaultSpacing * 4,
    },
    detailsContainer: {
        width: width - spacing.defaultSpacing * 4,
        height: height * 0.8,
    },
    image: {
        width: size.superHeroImageWidth * 3,
        height: size.superHeroImageHeight * 3,
        resizeMode: 'cover',
        alignSelf: 'center',
        marginBottom: spacing.defaultSpacing,
    },
    name: {
        color: colors.defaultColor,
        fontWeight: 'bold',
        fontSize: 34,
        alignSelf: 'center',
        marginBottom: spacing.defaultSpacing,
    },
    button: {
        position: 'absolute',
        top: 40,
        alignSelf: 'flex-start',
        backgroundColor: colors.highlightColor,
        width: size.superHeroImageWidth * 0.8,
        height: size.superHeroImageWidth * 0.8,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 999,
    },
    itemContainer: {
        height: '100%',
        paddingTop: 40 + size.superHeroImageWidth * 0.8,
    },
    title: {
        color: colors.defaultColor,
        textTransform: 'capitalize',
        textAlign: 'center',
        fontSize: 20,
        fontWeight: 'bold',
        textTransform: 'uppercase',
        marginBottom: spacing.defaultSpacing * 3,
    },
    powerstatsContainer: {
        width: '100%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginBottom: spacing.defaultSpacing * 2,
    },
    biographyContainer: {
        flexDirection: 'row',
        marginBottom: spacing.defaultSpacing,
    },
    connectionsContainer: {
        width: '100%',
        marginBottom: spacing.defaultSpacing * 2,
    },
    subTitle: {
        color: colors.defaultColor,
        marginLeft: spacing.defaultSpacing / 2,
        textTransform: 'capitalize',
        fontSize: 18,
    },
    connectionsSubTitle: {
        color: colors.defaultColor2,
        marginLeft: spacing.defaultSpacing / 2,
        textTransform: 'uppercase',
        fontSize: 18,
    },
    value: {
        color: colors.highlightColor2,
        fontWeight: 'bold',
        fontSize: 18,
    },
    appearanceValue: {
        color: colors.defaultColor,
        fontWeight: 'bold',
        backgroundColor: colors.highlightColor,
        fontSize: 18,
        paddingVertical: spacing.defaultSpacing / 3,
        paddingHorizontal: spacing.defaultSpacing,
        borderRadius: spacing.borderRadiusSpacing,
    },
    connectionsValue: {
        lineHeight: spacing.defaultSpacing * 2,
        color: colors.defaultColor,
        fontWeight: 'bold',
        fontSize: 18,
    },
    biographyValue: {
        flex: 1,
        marginLeft: spacing.defaultSpacing / 2,
        color: colors.defaultColor,
        fontSize: 18,
    }
});