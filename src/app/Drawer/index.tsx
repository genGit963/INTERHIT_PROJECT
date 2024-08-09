// profile
import ProfileScreen from './Profile';
import ProfileContributionScreen from './Profile/Contribution';
import IDCardScreen from './Profile/IDCard';
import MergeRequestScreen from './Profile/MergeRequest';
import ProfileOtherScreen from './Profile/Other';
import SubscriptionScreen from './Profile/Subscription';
import TransactionHistoryScreen from './Profile/TransactionHistory';

// AboutUs
import AboutOrganizationScreen from './AboutUs/AboutOrganization';
import ChairmanMessageScreen from './AboutUs/ChairmanMessages';
import EditorMessageScreen from './AboutUs/EditorMessage';
import WellWishesScreen from './AboutUs/WellWishes';

// Committee
import SadhashyaMemberScreen from './Committee/SadsayaMembers';
import BanshawaliCommitteeScreen from './Committee/BanshawaliCommittee';
import CentralCommitteeScreen from './Committee/CentralCommittee';
import CommitteeHistoryScreen from './Committee/CommitteeHistory';
import DistrictCommitteeScreen from './Committee/DistrictCommittee';
import FinanceCommitteeScreen from './Committee/FinanceCommittee';
import ProvinceCommitteeScreen from './Committee/ProvinceCommitte';

// Miscellaneous

// Setting
import SettingsScreen from './Setting';

export const DrawerScreens = {
  profile: {
    main: ProfileScreen,
    TransactionHistory: TransactionHistoryScreen,
    Subscription: SubscriptionScreen,
    IDCard: IDCardScreen,
    MergeRequest: MergeRequestScreen,
    Contribution: ProfileContributionScreen,
    ProfileOther: ProfileOtherScreen,
  },
  AboutUs: {
    aboutOrganization: AboutOrganizationScreen,
    chairmanMessage: ChairmanMessageScreen,
    editorMessage: EditorMessageScreen,
    wellWishes: WellWishesScreen,
  },
  Committee: {
    sadhashyaMember: SadhashyaMemberScreen,
    banshawaliCommittee: BanshawaliCommitteeScreen,
    centralCommittee: CentralCommitteeScreen,
    committeeHistory: CommitteeHistoryScreen,
    districtCommittee: DistrictCommitteeScreen,
    financeCommittee: FinanceCommitteeScreen,
    provinceCommittee: ProvinceCommitteeScreen,
  },
  Miscellaneous: {},
  Setting: {
    main: SettingsScreen,
  },
};
