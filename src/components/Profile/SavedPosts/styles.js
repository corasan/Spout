import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD } from '../../../ui/theme'

export default StyleSheet.create({
  savedPost: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: 'rgba(240, 240, 240, 0.6)',
    borderBottomWidth: 1,
  },
  content: {
    fontFamily: IOS_FONT,
    color: TINT,
  },
  savedPostAgreeDisagree: {
    flexDirection: 'row',
    marginTop: 20,
  },
  influenceText: {
    fontSize: 11,
    color: LIGHT_TEXT,
    fontFamily: IOS_FONT,
  },
})  
