import { StyleSheet } from 'react-native'
import { MAIN, BACKGROUND_GRAY, IOS_FONT_BOLD, TINT, IOS_FONT, BORDER_COLOR, LIGHT_TEXT } from '../../ui/theme'

export default StyleSheet.create({
  createPostContainer: {
    marginTop: 50,
  },
  username: {
    top: 34,
    fontSize: 24,
    color: MAIN,
    marginLeft: 16,
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
  },
  closeModalIcon: {
    height: 30,
    width: 30,
  },
  closeModalBtn: {
    zIndex: 10,
    position: 'absolute',
    right: 15,
    top: 32,
  },
  postInput: {
    height: 383,
    paddingHorizontal: 16,
    paddingVertical: 6,
    fontSize: 16,
    maxHeight: 383,
    backgroundColor: 'white',
    fontFamily: IOS_FONT,
  },
  charsLeft: {
    fontFamily: IOS_FONT,
    backgroundColor: 'transparent',
    fontSize: 18,
    marginRight: 30,
  },
  sendPostBtnContainer: {
    paddingHorizontal: 18,
    marginTop: 10,
  },
  sendPostBtn: {
    backgroundColor: MAIN,
    alignItems: 'center',
    paddingVertical: 9,
    paddingHorizontal: 14,
    width: 100,
  },
  sendPostText: {
    color: '#FFF',
    fontFamily: IOS_FONT,
    fontSize: 20,
  },
  placeholderText: {
    fontFamily: IOS_FONT,
    color: TINT,
    fontSize: 24,
  },
  postBarBox: {
    bottom: 0,
    position: 'absolute',
    justifyContent: 'flex-end',
    borderTopColor: BORDER_COLOR,
    borderTopWidth: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
})
