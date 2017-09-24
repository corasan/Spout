import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, IOS_FONT_BOLD, DARKER_GRAY } from '../../ui/theme'

export default StyleSheet.create({
  userArea: {
    backgroundColor: 'white',
    paddingTop: 28,
    paddingLeft: 26,
    paddingBottom: 20,
  },
  settingsText: {
    fontFamily: IOS_FONT,
    fontSize: 22,
    color: TINT,
    backgroundColor: 'transparent',
    marginBottom: 26,
  },
  userDetails: {
    flexDirection: 'row',
  },
  userPicCircle: {
    height: 76,
    width: 76,
    borderRadius: 100,
    backgroundColor: '#D0D2E2',
  },
  name: {
    fontSize: 18,
    fontFamily: IOS_FONT,
    color: TINT,
  },
  username: {
    fontSize: 18,
    fontFamily: IOS_FONT,
    color: DARKER_GRAY,
  },
  logoutBtn: {
    backgroundColor: '#F26E60',
    borderRadius: 2,
    width: 75,
    height: 26,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
  },
  logoutText: {
    fontSize: 14,
    color: 'white',
    fontFamily: IOS_FONT,
  },
})