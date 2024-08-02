import React from 'react'; // Import React
import {SCREEN_NAME} from '../../../core/AppScreen';
// svg
import TransactionHistorySvg from '../../../assets/svg/ep_coins.svg';
import IdCardSvg from '../../../assets/svg/id-card.svg';
import SubscriptionSvg from '../../../assets/svg/credit-card.svg';
import MergeReqeuestSvg from '../../../assets/svg/merge-branch.svg';
import ContributionSvg from '../../../assets/svg/streamline_coin-share.svg';
import OtherSvg from '../../../assets/svg/three-horizontal-dot.svg';

export interface ProfileMenuDataInterface {
  Icon: React.FC;
  label: string;
  route: string;
}

let profileMenuIconHeight = 36;
let profileMenuIconWidth = 36;

// ICONS
const TransactionHistoryIcon: React.FC = () => {
  return (
    <TransactionHistorySvg
      height={profileMenuIconHeight}
      width={profileMenuIconWidth}
    />
  );
};

const IdCardIcon: React.FC = () => {
  return (
    <IdCardSvg height={profileMenuIconHeight} width={profileMenuIconWidth} />
  );
};
const SubscriptionIcon: React.FC = () => {
  return (
    <SubscriptionSvg
      height={profileMenuIconHeight}
      width={profileMenuIconWidth}
    />
  );
};

const MergeRequestIcon: React.FC = () => {
  return (
    <MergeReqeuestSvg
      height={profileMenuIconHeight}
      width={profileMenuIconWidth}
    />
  );
};

const ContributionIcon: React.FC = () => {
  return (
    <ContributionSvg
      height={profileMenuIconHeight}
      width={profileMenuIconWidth}
    />
  );
};

const OtherIcon: React.FC = () => {
  return (
    <OtherSvg height={profileMenuIconHeight} width={profileMenuIconWidth} />
  );
};

// DATA
export const profileMenuData: ProfileMenuDataInterface[] = [
  {
    Icon: TransactionHistoryIcon,
    label: 'Transaction History',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.TRANSACTION_HISTORY,
  },
  {
    Icon: SubscriptionIcon,
    label: 'Subscription',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.SUBSCRIPTION,
  },
  {
    Icon: IdCardIcon,
    label: 'ID Card',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.IDCARD,
  },

  {
    Icon: MergeRequestIcon,
    label: 'Merge Request',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.MERGE_REQUEST,
  },
  {
    Icon: ContributionIcon,
    label: 'Contribution',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.CONTRIBUTION,
  },
  {
    Icon: OtherIcon,
    label: 'Other',
    route: SCREEN_NAME.DRAWER.PROFILE.PROFILE_MENU.OTHER,
  },
];
