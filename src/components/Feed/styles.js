import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD, BORDER_COLOR } from '../../ui/theme'

export default StyleSheet.create({
  feedContainer: {
    flex: 1,
    // marginTop: 70,
  },
  // Styles for posts/post list
  postBox: {
    backgroundColor: '#fff',
    paddingHorizontal: 22,
    paddingTop: 10,
    paddingBottom: 6,
    marginBottom: 8,
    marginTop: 4,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    borderTopColor: BORDER_COLOR,
    borderTopWidth: 1,
  },
  postHeader: {
    flexDirection: 'column',
    // justifyContent: 'space-between',
    marginTop: 5,
  },
  timeAgoText: {
    fontSize: 12,
    color: LIGHT_TEXT,
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
  },
  usernameText: {
    color: TINT,
    fontWeight: 'bold',
    fontSize: 16,
    fontFamily: IOS_FONT,
  },
  postContentText: {
    color: TINT,
    marginBottom: 15,
    marginTop: 16,
    fontFamily: IOS_FONT,
    fontWeight: '100',
    fontSize: 14,
  },
  leftCol: {
    flex: 0.2,
    alignItems: 'center',
    marginLeft: -15,
  },
  rightCol: {
    flex: 0.8,
  },
  postRow: {
    flex: 1,
    flexDirection: 'row',
  },
  iconPostText: {
    color: LIGHT_TEXT,
    fontSize: 13,
    fontFamily: IOS_FONT,
    marginTop: 5,
  },
  iconBox: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  agreeAndDisagreeText: {
    fontSize: 11,
    color: LIGHT_TEXT,
  },
  lineDivide: {
    flex: 1,
    borderWidth: 0.6,
    borderColor: BORDER_COLOR,
    marginTop: 20,
  },
  header: {
    height:86,
    backgroundColor: 'white',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  headerTitle: {
    marginTop: 20,
    fontSize: 26,
    fontWeight: 'bold',
    fontFamily: IOS_FONT,
    color: TINT,
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
  },
  tabBarUnderlineStyle: {
    backgroundColor: MAIN,
    width: 70,
    left: 68,
    marginBottom: 10,
  },
})
