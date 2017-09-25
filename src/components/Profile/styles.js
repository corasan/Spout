import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD, DARKER_GRAY, BORDER_COLOR } from '../../ui/theme'

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
    fontFamily: IOS_FONT,
    fontSize: 22,
    color: TINT,
    backgroundColor: 'transparent',
  },
  username: {
    fontFamily: IOS_FONT,
    fontSize: 18,
    color: DARKER_GRAY,
    marginTop: -2,
    backgroundColor: 'transparent',
  },
  namesArea: {
    marginTop: 8,
    marginLeft: 12,
    paddingBottom: 20,
  },
  noPosts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  noPostsText: {
    fontSize: 24,
    fontFamily: IOS_FONT,
    color: DARKER_GRAY,
  },
  post: {
    backgroundColor: 'white',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderBottomColor: 'rgba(240, 240, 240, 0.6)',
    borderBottomWidth: 1,
  },
  content: {
    fontFamily: IOS_FONT,
    color: TINT,
    fontSize: 14,
  },
  likes: {
    flexDirection: 'row',
    marginTop: 20,
  },
  likesText: {
    fontSize: 14,
    color: DARKER_GRAY,
    fontFamily: IOS_FONT,
  },
  tabStyle: {
    borderBottomWidth: 1,
    borderBottomColor: BORDER_COLOR,
    paddingBottom: 0,
    backgroundColor: 'white',
    marginTop: -15,
  },
  tabBarTextStyle: {
    fontFamily: IOS_FONT,
    fontSize: 24,
    letterSpacing: 1,
    marginLeft: 16,
  },
  tabBarUnderlineStyle: {
    backgroundColor: MAIN,
    width: 62,
    left: 80,
    marginBottom: 10,
  },
})
