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
  TitleEN: string;
  TitleNP: string;
  route: string;
  endpointType?: string;
}

export const committeeOptionsData: drawerOptionsInterface[] = [
  {
    Icon: CommitteeSvg,
    TitleEN: 'Sadhashya Member',
    TitleNP: 'साधारण सदस्य',
    route: SCREEN_NAME.DRAWER.COMMITTEE.SADHASHYA_MEMBER,
  },
  {
    Icon: CommitteeSvg,
    TitleEN: 'Central Commitee',
    TitleNP: 'केन्द्रीय समिति',
    route: SCREEN_NAME.DRAWER.COMMITTEE.CENTRAL_COMMITTEE,
    endpointType: 'CENTRAL',
  },
  {
    Icon: HistorySvg,
    TitleEN: 'Commitee History',
    TitleNP: 'समिति इतिहास',
    route: SCREEN_NAME.DRAWER.COMMITTEE.COMMITTEE_HISTORY,
  },
  {
    Icon: CommitteeSvg,
    TitleEN: 'Province Commitee',
    TitleNP: 'प्रदेश समिति',
    route: SCREEN_NAME.DRAWER.COMMITTEE.PROVINCE_COMMITTEE,
    endpointType: 'PROVINCE',
  },
  {
    Icon: CommitteeSvg,
    TitleEN: 'District Committee',
    TitleNP: 'जिल्ला समिति',
    route: SCREEN_NAME.DRAWER.COMMITTEE.DISTRICT_COMMITTEE,
    endpointType: 'DISTRICT',
  },
  {
    Icon: CommitteeSvg,
    TitleEN: 'Banshawali Committee',
    TitleNP: 'वंशवली समिति',
    route: SCREEN_NAME.DRAWER.COMMITTEE.BANSHAWALI_COMMITTEE,
    endpointType: 'FAMTREE',
  },
  {
    Icon: CommitteeSvg,
    TitleEN: 'Finance Committee',
    TitleNP: 'वित्त समिति',
    route: SCREEN_NAME.DRAWER.COMMITTEE.FINANCE_COMMITTEE,
    endpointType: 'ACCOUNT',
  },
];

export const aboutUsOptionsData: drawerOptionsInterface[] = [
  {
    Icon: BuildingSvg,
    TitleEN: 'About Organization',
    TitleNP: 'सङ्गठनको बारे',
    route: SCREEN_NAME.DRAWER.ABOUT_US.ABOUT_ORGANIZATION,
  },
  {
    Icon: EnvelopeSvg,
    TitleEN: 'Well Wishes',
    TitleNP: 'शुभकामनाहरू',
    route: SCREEN_NAME.DRAWER.ABOUT_US.WELL_WISHES,
  },
  {
    Icon: EnvelopeSvg,
    TitleEN: "Chairman's Message",
    TitleNP: 'सभापतिको सन्देश',
    route: SCREEN_NAME.DRAWER.ABOUT_US.CHAIRMAN_MESSAGE,
  },
  {
    Icon: EnvelopeSvg,
    TitleEN: "Editor's Message",
    TitleNP: 'सम्पादकको सन्देश',
    route: SCREEN_NAME.DRAWER.ABOUT_US.EDITOR_MESSAGE,
  },
];
