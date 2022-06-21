import {Dimensions} from 'react-native';

const width = Dimensions.get('window').width;
const height = Dimensions.get('window').height;

const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;

export const adapt = (size: number) => (width / guidelineBaseWidth) * size;
