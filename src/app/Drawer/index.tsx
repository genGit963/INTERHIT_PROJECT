// profile
import ProfileScreen from './Profile';
import ProfileContributionScreen from './Profile/Contribution';
import IDCardScreen from './Profile/IDCard';
import MergeRequestScreen from './Profile/MergeRequest';
import ProfileOtherScreen from './Profile/Other';
import SubscriptionScreen from './Profile/Subscription';
import TransactionHistoryScreen from './Profile/TransactionHistory';

// AboutUs

// Committee

// Miscellaneous

// Setting

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
  AboutUs: {},
  Committee: {},
  Miscellaneous: {},
  Setting: {},
};
