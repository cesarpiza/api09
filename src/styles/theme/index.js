import { Dimensions } from "react-native";

const { width, height } = Dimensions.get('window');

export const Styles = {
    defaultColor: '#FFFFFF',
    colors: {
        defaultColor: '#FFFFFF',
        defaultColor2: '#999',
        highlightColor: '#F43623',
        highlightColor2: '#F5BA22',
        background: '#000000',
    },
    size: {
        superHeroImageWidth: 80,
        superHeroImageHeight: 0,
        superHeroImageContainerHeight: height / 2,
    },
    spacing: {
        defaultSpacing: 15,
        borderRadiusSpacing: 30,
    },
}

Styles.size.superHeroImageHeight = Styles.size.superHeroImageWidth / 100 * 33.333333333333 + Styles.size.superHeroImageWidth;