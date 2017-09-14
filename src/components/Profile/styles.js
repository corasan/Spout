import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD, DARKER_GRAY } from '../../ui/theme'

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
  name: {
    fontFamily: IOS_FONT_BOLD,
    fontSize: 18,
    color: TINT,
    backgroundColor: 'transparent',
  },
  username: {
    fontFamily: IOS_FONT,
    fontSize: 15,
    color: MAIN,
    marginTop: -5,
    backgroundColor: 'transparent',
  },
  namesArea: {
    marginTop: 2,
    marginLeft: 15,
  },
  tabContainerStyle: {
    shadowColor: '#000000',
    shadowOffset: { width: 0, height: -0.5 },
    shadowOpacity: 0.05,
  },
  noPosts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPostsText: {
    fontSize: 24,
    fontFamily: IOS_FONT_BOLD,
    color: DARKER_GRAY,
  },
})
