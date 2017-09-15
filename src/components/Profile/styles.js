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
    borderBottomColor: 'rgba(240, 240, 240, 0.6)',
    borderBottomWidth: 1,
    borderTopColor: 'rgba(240, 240, 240, 0.6)',
    borderTopWidth: 1,
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
  },
  postAgreeDisagree: {
    flexDirection: 'row',
    marginTop: 20,
  },
  agreeDisagreeText: {
    fontSize: 11,
    color: LIGHT_TEXT,
    fontFamily: IOS_FONT,
  },
})
