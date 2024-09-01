import React, { useState } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { AppScreenNavigationType } from '../../../core/navigation-type';
import ScreenTopTitle from '../../../components/ScreenTopTitle';
import BottomSpace from '../../../components/BottomSpace';
import { Colors } from '../../../constants/Color';
import { ThemedText } from '../../../components/ThemedText';
import EditProfileModal from './components/EditProfileModal';
import ChangePasswordModal from './components/ChangePasswordModal';

// svg
import EditProfileSvg from '../../../assets/svg/iconamoon_profile-light.svg';
import ChangePswdSvg from '../../../assets/svg/mdi_password-outline.svg';
import supplyShadowEffect from '../../../utils/Shadow';
import useTranslate from '../../../hooks/language/translate';

// types and interface
type SettingsScreenProps = {} & AppScreenNavigationType;

// ----------------- Settings screen ---------------------
const SettingsScreen: React.FC<SettingsScreenProps> = ({ navigation }) => {
  // change pswd modal state
  const [isChangePswdModalVisible, setChangePswdModalVisible] =
    useState<boolean>(false);

  // edit profile modal state
  const [isEditProfileModalVisible, setEditProfileModalVisible] =
    useState<boolean>(false);

  const { translateLanguage } = useTranslate()

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle navigation={navigation} screenTitle={translateLanguage("Settings", "सेटिङहरू")} />

        {/* Body */}
        <ScrollView
          style={styles.ScrollView}
          contentContainerStyle={styles.ScrollContent}
          showsVerticalScrollIndicator={false}>
          {/* Edit profile */}
          <TouchableOpacity
            style={styles.MenuCard}
            onPress={() => setEditProfileModalVisible(true)}>
            <EditProfileSvg height={34} width={34} />
            <View style={styles.MenuDetail}>
              <ThemedText type="semiBold">{translateLanguage("Edit Profile", "प्रोफाइल सम्पादन गर्नुहोस्")}</ThemedText>
              <ThemedText type="muted">{translateLanguage("Change your Personal Details", "आफ्नो व्यक्तिगत विवरणहरू परिवर्तन गर्नुहोस्")}</ThemedText>
            </View>
          </TouchableOpacity>

          {/* Change Password */}
          <TouchableOpacity
            style={styles.MenuCard}
            onPress={() => setChangePswdModalVisible(true)}>
            <ChangePswdSvg height={34} width={34} />
            <View style={styles.MenuDetail}>
              <ThemedText type="semiBold">{translateLanguage("Manage Password", "पासवर्ड प्रबन्ध गर्नुहोस्")}</ThemedText>
              <ThemedText type="muted">{translateLanguage("Change your current password", "हालको पासवर्ड परिवर्तन गर्नुहोस्")}</ThemedText>
            </View>
          </TouchableOpacity>
        </ScrollView>
        <BottomSpace spaceHeight={'5%'} />

        {/* edit profile modal */}
        {isEditProfileModalVisible && (
          <EditProfileModal
            isVisible={isEditProfileModalVisible}
            modalVisibile={setEditProfileModalVisible}
          />
        )}

        {/* change pswd modal */}
        {isChangePswdModalVisible && (
          <ChangePasswordModal
            isVisible={isChangePswdModalVisible}
            modalVisibile={setChangePswdModalVisible}
          />
        )}
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
  ScrollView: { marginBottom: 10, paddingBottom: 30 },
  ScrollContent: { paddingBottom: 100, gap: 10 },

  MenuCard: {
    display: 'flex',
    flexDirection: 'row',
    gap: 16,
    alignItems: 'center',
    margin: 4,

    paddingVertical: 8,
    paddingHorizontal: 18,
    borderRadius: 10,

    backgroundColor: Colors.whiteTunedBG,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 3,
      Color: '#000',
      Opacity: 0.15,
      Elevation: 3,
    }),
  },
  MenuIcon: {},
  MenuDetail: {},
});

export default SettingsScreen;
