import { StyleSheet } from 'react-native'
import { TINT, IOS_FONT, BORDER_COLOR } from '../../../ui/theme'

export default StyleSheet.create({
  topBar: {
    height: 70,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingTop: 28,
    flexDirection: 'row',
    marginBottom: 40,
  },
  pageName: {
    fontSize: 20,
    fontFamily: IOS_FONT,
    color: TINT,
  },
  editInput: {
    height: 55,
    backgroundColor: 'white',
    paddingHorizontal: 26,
    borderBottomColor: BORDER_COLOR,
    borderBottomWidth: 1,
    fontFamily: IOS_FONT,
    fontSize: 20,
    color: TINT,
  },
  saveBtn: {
    backgroundColor: '#4BD964',
    height: 55,
    marginTop: 40,
    alignItems: 'center',
    justifyContent: 'center',
  },
  saveText: {
    color: 'white',
    fontSize: 20,
    fontFamily: IOS_FONT,
    fontWeight: 'bold',
  },
})
