import React, {useState} from 'react';
import {
  Modal,
  View,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import BottomSpace from '../BottomSpace';
import {ThemedText} from '../ThemedText';
import {AppScreenNavigationType} from '../../core/navigation-type';
import {SCREEN_NAME} from '../../core/AppScreen';
import DrawerBarBtn from './DrawerBarButton';
import {stylesDC} from './Drawer.stylesheet';
import {aboutUsOptionsData, committeeOptionsData} from './drawer-data';
import RNRestart from 'react-native-restart';

// svg
import ProfileSvg from '../../assets/svg/user.svg';
import CommitteeSvg from '../../assets/svg/ion_people-outline.svg';
import DropDownGrpSvg from '../../assets/svg/chevron-right.svg';
import AboutUsSvg from '../../assets/svg/info.svg';
import SettingSvg from '../../assets/svg/settings.svg';
import LogOutSvg from '../../assets/svg/log-out.svg';
import FacebookSvg from '../../assets/svg/facebook-icon.svg';
import InstagramSvg from '../../assets/svg/instagram-iocn.svg';
import OwnWebsiteSvg from '../../assets/svg/www.svg';
import AppUpdateSvg from '../../assets/svg/update.svg';
import FeedbackSvg from '../../assets/svg/feedback.svg';
import PrivacypolicySvg from '../../assets/svg/shield.svg';
import HelpFAQsSvg from '../../assets/svg/help-circle.svg';
import TermsConditionsSvg from '../../assets/svg/file-text.svg';
import UserDrawerView from './UserDrawerView';
import {asyncRemoveData} from '../../core/AsyncStorage';

// type
type DrawerModalProps = {
  isVisible: boolean;
  modalVisibile: (value: boolean) => void;
} & AppScreenNavigationType;

// ---------------------- Drawer Modal --------------------
const DrawerModal: React.FC<DrawerModalProps> = ({
  isVisible,
  modalVisibile,
  navigation,
}) => {
  // isCommitteeGrpVisible
  const [isCommitteeGrpVisible, setCommitteeGrpVisible] =
    useState<boolean>(false);

  // isAboutUsGrpVisible
  const [isAboutUsGrpVisible, setAboutUsGrpVisible] = useState<boolean>(false);

  // handle Logout
  const handleLogout = async () => {
    console.log('Do log out !');
    await asyncRemoveData('USER').then(() => RNRestart.restart());
  };
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => modalVisibile(false)}>
      <SafeAreaView style={stylesDC.ModelContainer}>
        <View style={stylesDC.modalView}>
          {/* ---------------------- Profile View  ---------------------- */}
          <UserDrawerView
            navigation={navigation}
            callBackSetDrawerModalVisible={modalVisibile}
          />

          {/* Drawer Menus */}
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={stylesDC.ScorllContainer}>
            {/* ---------------------- Profile bar Btn --------------------*/}
            <DrawerBarBtn
              Icon={ProfileSvg}
              Title="Profile"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />

            {/* ---------------------- Committee Group  --------------------*/}
            <TouchableOpacity
              style={stylesDC.GrpButton}
              onPress={() => setCommitteeGrpVisible(!isCommitteeGrpVisible)}>
              {/* Icon */}
              <CommitteeSvg height={22} width={22} style={stylesDC.GrpIcon} />

              {/* Title */}
              <ThemedText type="mediumBold" style={stylesDC.GrpTitle}>
                Committee
              </ThemedText>

              {/* Dropdown */}
              {isCommitteeGrpVisible ? (
                <DropDownGrpSvg style={stylesDC.DDSvgOpen} />
              ) : (
                <DropDownGrpSvg style={stylesDC.DDSvgClose} />
              )}
            </TouchableOpacity>

            {/*--------  Committee Options ----------*/}
            {isCommitteeGrpVisible && (
              <View style={stylesDC.OptionsView}>
                {committeeOptionsData.map((committee, _) => (
                  <DrawerBarBtn
                    key={committee.route}
                    Icon={committee.Icon}
                    Title={committee.Title}
                    route={committee.route}
                    navigation={navigation}
                    callbackModalVisible={modalVisibile}
                  />
                ))}
              </View>
            )}

            {/* ---------------------- About Us Group  --------------------*/}
            <TouchableOpacity
              style={stylesDC.GrpButton}
              onPress={() => setAboutUsGrpVisible(!isAboutUsGrpVisible)}>
              {/* Icon */}
              <AboutUsSvg height={22} width={22} style={stylesDC.GrpIcon} />

              {/* Title */}
              <ThemedText type="mediumBold" style={stylesDC.GrpTitle}>
                About Us
              </ThemedText>

              {/* Dropdown */}
              {isAboutUsGrpVisible ? (
                <DropDownGrpSvg style={stylesDC.DDSvgOpen} />
              ) : (
                <DropDownGrpSvg style={stylesDC.DDSvgClose} />
              )}
            </TouchableOpacity>

            {/* ------------- about us options ------------- */}
            {isAboutUsGrpVisible && (
              <View style={stylesDC.OptionsView}>
                {aboutUsOptionsData.map((item, _) => (
                  <DrawerBarBtn
                    key={item.route}
                    Icon={item.Icon}
                    Title={item.Title}
                    route={item.route}
                    navigation={navigation}
                    callbackModalVisible={modalVisibile}
                  />
                ))}
              </View>
            )}

            {/* ---------------------- Setting --------------------*/}
            <DrawerBarBtn
              Icon={SettingSvg}
              Title="Setting"
              route={SCREEN_NAME.DRAWER.SETTING.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />
          </ScrollView>
          {/* -------------------------------------- Bottom View ---------------------- */}

          {/* ---------------------- App Miscellneous ---------------------- */}
          <View style={stylesDC.AppMiscllView}>
            {/* ---------------------- "App update" --------------------*/}
            <DrawerBarBtn
              Icon={AppUpdateSvg}
              Title="App update"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />

            {/* ---------------------- "Feedback" --------------------*/}
            <DrawerBarBtn
              Icon={FeedbackSvg}
              Title="Feedback"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />

            {/* ---------------------- "Privacy policy" --------------------*/}
            <DrawerBarBtn
              Icon={PrivacypolicySvg}
              Title="Privacy Policy"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />

            {/* ---------------------- "Help & FAQs" --------------------*/}
            <DrawerBarBtn
              Icon={HelpFAQsSvg}
              Title="Help & FAQs"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />

            {/* ---------------------- "Terms & Conditions" --------------------*/}
            <DrawerBarBtn
              Icon={TermsConditionsSvg}
              Title="Terms & Conditions"
              route={SCREEN_NAME.DRAWER.PROFILE.MAIN}
              navigation={navigation}
              callbackModalVisible={modalVisibile}
            />
          </View>
          <View style={stylesDC.LogoutAndSocialView}>
            {/* Log out button */}
            <TouchableOpacity style={stylesDC.LogOutBtn} onPress={handleLogout}>
              <LogOutSvg height={24} width={24} />
              <ThemedText type="mediumBold" style={stylesDC.LogOutText}>
                Log Out
              </ThemedText>
            </TouchableOpacity>

            {/* Other Social Links */}
            <View style={stylesDC.SocialLinkView}>
              {/* facebook */}
              <TouchableOpacity onPress={() => console.log('go to facebook')}>
                <FacebookSvg height={32} width={32} />
              </TouchableOpacity>

              {/* instagram */}
              <TouchableOpacity onPress={() => console.log('go to instagram')}>
                <InstagramSvg height={32} width={32} />
              </TouchableOpacity>

              {/* own website */}
              <TouchableOpacity
                onPress={() => console.log('go to own website')}>
                <OwnWebsiteSvg height={32} width={32} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </Modal>
  );
};

export default DrawerModal;
