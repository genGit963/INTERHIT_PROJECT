import React, {useContext, useEffect, useState} from 'react';
import {View, StyleSheet, Image, TouchableOpacity} from 'react-native';
import {ThemedText} from '../../../../components/ThemedText';
import {Colors, CommunityColor} from '../../../../constants/Color';
import NotificationSvg from '../../../../assets/svg/bell.svg';
import NepaliFlagSvg from '../../../../assets/svg/nepali_flag.svg';
import EnglishFlagSvg from '../../../../assets/svg/english-flag.svg';
import {useUserDataProvider} from '../../../../hooks/tabs/dashboard';
import {StoredUserType} from '../../../../schema/auth';
import {SOCIETY_DATA} from '../../../../core/SocietyData';
import {getShortHandOfName} from '../../../../utils/nameParser';
import {useDispatch, useSelector} from 'react-redux';
import {AppDispatch, RootState} from '../../../../redux/store';
import {setLanguage} from '../../../../redux/features/language/languageSlice';
import useTranslate from '../../../../hooks/language/translate';

type HeaderProps = {
  callBackDrawerVisible: (value: boolean) => void;
};

const Header: React.FC<HeaderProps> = ({callBackDrawerVisible}) => {
  // app user
  const {handleUserDataProvider} = useUserDataProvider();
  const [APPUSER, setAPPUSER] = useState<StoredUserType | null | undefined>();

  const {language} = useSelector((state: RootState) => state.language);
  const dispatch: AppDispatch = useDispatch();

  const toogleLanguage = () => {
    dispatch(setLanguage(language === 'english' ? 'nepali' : 'english'));
  };

  const {translateLanguage} = useTranslate();

  useEffect(() => {
    const handleFetchUser = async () => {
      const appUser = await handleUserDataProvider();
      if (appUser) {
        setAPPUSER(appUser);
      }
    };
    handleFetchUser();
  }, []);

  return (
    <View style={styles.Container}>
      {/* to the profile */}
      <TouchableOpacity
        style={styles.Profile}
        onPress={() => callBackDrawerVisible(true)}>
        {APPUSER?.user.imgurl ? (
          <Image
            height={60}
            width={60}
            source={{
              uri: APPUSER?.user.imgurl as string | undefined,
            }}
            style={styles.Image}
          />
        ) : (
          <View style={styles.NoImageView}>
            <ThemedText style={styles.NoImageText} type="title">
              {getShortHandOfName(String(APPUSER?.user.name))}
            </ThemedText>
          </View>
        )}

        <View>
          <ThemedText style={styles.CommunitySlog} type="semiBold">
            {translateLanguage(SOCIETY_DATA.sologan, SOCIETY_DATA.solaganNp)} !
          </ThemedText>
          <ThemedText>{APPUSER?.user.name}</ThemedText>
        </View>
      </TouchableOpacity>

      {/* other  */}
      <View style={styles.NotifyLang}>
        <NotificationSvg height={32} width={32} />
        <TouchableOpacity onPress={toogleLanguage}>
          {language === 'nepali' ? (
            <NepaliFlagSvg height={32} width={32} />
          ) : (
            <EnglishFlagSvg height={32} width={32} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  Container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 8,
    // borderWidth: 1,
  },
  Profile: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    flex: 0.68,
    gap: 16,
    alignItems: 'center',
  },
  Image: {
    borderRadius: 38,
    resizeMode: 'cover',
    height: 64,
    width: 64,
  },
  NoImageView: {
    // borderWidth: 1,
    borderRadius: 38,
    height: 64,
    width: 64,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 13,
    backgroundColor: Colors.primary,
  },
  NoImageText: {
    textAlign: 'center',
    color: Colors.whiteTunedBG,
    fontSize: 28,
    // backgroundColor: 'green',
  },
  CommunitySlog: {
    color: CommunityColor.slogan,
  },
  NotifyLang: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    gap: 16,
    flex: 0.34,
  },
});
