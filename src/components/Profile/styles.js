import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD } from '../../ui/theme'

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  user: {
    flexDirection: 'row',
    backgroundColor: 'white',
    paddingVertical: 18,
    paddingHorizontal: 16,
  },
  username: {
    fontFamily: IOS_FONT_BOLD,
    fontSize: 18,
    color: TINT,
  },
  name: {
    fontFamily: IOS_FONT,
    fontSize: 14,
    color: LIGHT_TEXT,
    marginTop: -5,
  },
  namesArea: {
    marginTop: 2,
    marginLeft: 15,
  },
})
