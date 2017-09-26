import { StyleSheet } from 'react-native'
import { MAIN, TINT, LIGHT_TEXT, IOS_FONT, BORDER_COLOR, DARKER_GRAY } from '../../ui/theme'

export default StyleSheet.create({
  userArea: {
    backgroundColor: 'white',
    paddingTop: 28,
    paddingLeft: 30,
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
  settingsSection: {
    marginTop: 25,
  },
  settingsSectionTitle: {
    marginLeft: 30,
    fontSize: 16,
    fontFamily: IOS_FONT,
    color: DARKER_GRAY,
    marginBottom: 5,
  },
  settingOptionContainer: {
    height: 55,
    backgroundColor: 'white',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    paddingHorizontal: 30,
    alignItems: 'center',
    flexDirection: 'row',
  },
  settingOptionLabel: {
    fontSize: 16,
    color: DARKER_GRAY,
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
  },
  settingOptionData: {
    fontSize: 18,
    color: TINT,
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
    position: 'absolute',
    left: 150,
  },  
  // Switch styles
  switch: {
    height: 55,
    backgroundColor: 'white',
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: 30,
    paddingRight: 10,
    justifyContent: 'space-between',
  },
})
