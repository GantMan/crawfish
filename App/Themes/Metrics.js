'use strict'

import { Dimensions } from 'react-native'

const { width, height } = Dimensions.get('window')

const metrics = {
  basePadding: 10,
  baseMargin: 10,
  screenWidth: width,
  screenHeight: height,
  fonts: {
    title: 36,
    normal: 24,
    input: 18,
    small: 12
  }
}
