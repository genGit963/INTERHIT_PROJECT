// svg
import CommitteeSvg from '../../assets/svg/ion_people-outline.svg';
import HistorySvg from '../../assets/svg/tdesign_history.svg';
import BuildingSvg from '../../assets/svg/octicon_organization-16.svg';
import EnvelopeSvg from '../../assets/svg/wpf_message-outline.svg';

// committee screens data
import {SvgProps} from 'react-native-svg';
import {SCREEN_NAME} from '../../core/AppScreen';

interface drawerOptionsInterface {
  Icon: React.FC<SvgProps>;
  Title: string;
  route: string;
}

export const committeeOptionsData: drawerOptionsInterface[] = [
  {
    Icon: CommitteeSvg,
    Title: 'Sadhashya Member',
    route: SCREEN_NAME.DRAWER.COMMITTEE.SADHASHYA_MEMBER,
  },
  {
    Icon: CommitteeSvg,
    Title: 'Central Commitee',
    route: SCREEN_NAME.DRAWER.COMMITTEE.CENTRAL_COMMITTEE,
  },
  {
    Icon: HistorySvg,
    Title: 'Commitee History',
    route: SCREEN_NAME.DRAWER.COMMITTEE.COMMITTEE_HISTORY,
  },
  {
    Icon: CommitteeSvg,
    Title: 'Province Commitee',
    route: SCREEN_NAME.DRAWER.COMMITTEE.PROVINCE_COMMITTEE,
  },
  {
    Icon: CommitteeSvg,
    Title: 'District Committee',
    route: SCREEN_NAME.DRAWER.COMMITTEE.DISTRICT_COMMITTEE,
  },
  {
    Icon: CommitteeSvg,
    Title: 'Banshawali Committee',
    route: SCREEN_NAME.DRAWER.COMMITTEE.BANSHAWALI_COMMITTEE,
  },
  {
    Icon: CommitteeSvg,
    Title: 'Finance Committee',
    route: SCREEN_NAME.DRAWER.COMMITTEE.FINANCE_COMMITTEE,
  },
];

export const aboutUsOptionsData: drawerOptionsInterface[] = [
  {
    Icon: BuildingSvg,
    Title: 'About Organization',
    route: SCREEN_NAME.DRAWER.ABOUT_US.ABOUT_ORGANIZATION,
  },
  {
    Icon: EnvelopeSvg,
    Title: 'Well Wishes',
    route: SCREEN_NAME.DRAWER.ABOUT_US.WELL_WISHES,
  },
  {
    Icon: EnvelopeSvg,
    Title: "Chairman's Message",
    route: SCREEN_NAME.DRAWER.ABOUT_US.CHAIRMAN_MESSAGE,
  },
  {
    Icon: EnvelopeSvg,
    Title: "Editor's Message",
    route: SCREEN_NAME.DRAWER.ABOUT_US.EDITOR_MESSAGE,
  },
];
