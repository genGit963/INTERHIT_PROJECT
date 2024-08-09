import {StyleSheet} from 'react-native';
import {Colors} from '../../constants/Color';

// stylesDC : StyleSheet for Drawer Component

export const stylesDC = StyleSheet.create({
  ModelContainer: {
    height: '100%',
    width: '68%',
    position: 'absolute',
    // backgroundColor: 'red',
  },
  modalView: {
    backgroundColor: '#fff',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 12,
    height: '102%',

    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
  ScorllContainer: {
    width: '100%',
    paddingHorizontal: 10,

    marginBottom: '2%',
    // backgroundColor: 'red',
  },
  GrpButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 16,
    alignItems: 'center',
    marginVertical: 10,
    // borderWidth: 1,
  },
  GrpIcon: {},
  GrpTitle: {
    fontSize: 16,
    color: Colors.muteText,
  },
  DDSvgOpen: {
    transform: [{rotate: '180deg'}],
    marginLeft: 16,
  },
  DDSvgClose: {
    alignItems: 'center',
    marginLeft: 16,
  },
  OptionsView: {
    marginLeft: 12,
  },
  AppMiscllView: {
    // borderWidth: 1,
    width: '100%',
    paddingHorizontal: 10,
    paddingBottom: 10,

    borderBottomWidth: 0.5,
    borderBottomColor: Colors.muteGray,
  },
  LogoutAndSocialView: {
    height: '12%',
    width: '100%',
    marginBottom: 26,
    display: 'flex',
    paddingHorizontal: 10,
    flexDirection: 'column',
    justifyContent: 'flex-end',

    // borderWidth: 1,
  },
  LogOutBtn: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    marginBottom: 16,
  },
  LogOutText: {
    color: Colors.redMain,
    fontSize: 18,
  },
  // Social Btns
  SocialLinkView: {
    // borderWidth: 1,
    width: '60%',
    marginHorizontal: 'auto',

    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
