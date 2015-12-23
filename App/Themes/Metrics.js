'use strict'

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  basePadding: 10,
  baseMargin: 10,
  screenWidth: width,
  screenHeight: height,
  navBarHeight: 64,
  fonts: {
    title: 36,
    normal: 24,
    input: 18,
    medium: 16,
    small: 14,
    tiny: 10
  }
}

export default metrics
