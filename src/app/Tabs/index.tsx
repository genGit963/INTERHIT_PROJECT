// Dashboard
import DashboardScreen from './Dashboard';
import {
  AlekhScreen,
  BanshaContribution,
  DownloadScreen,
  Gallery,
  KulMandir,
  Literature,
  TopContribution,
} from './Dashboard/MenuScreen';

// Contribution
import ContributionTabScreen from './Contribution';

// Genealogy
import GenealogyTabScreen from './Genealogy';

// Notice
import NoticeTabScreen from './Notice';

// Overview
import OverviewTabScreen from './Overview';

export const TabsScreen = {
  dashboard: {
    main: DashboardScreen,
    alekh: AlekhScreen,
    banshaContribution: BanshaContribution,
    download: DownloadScreen,
    gallery: Gallery,
    kulMandir: KulMandir,
    literatute: Literature,
    topContribution: TopContribution,
  },
  genealogy: {
    main: GenealogyTabScreen,
  },
  notice: {
    main: NoticeTabScreen,
  },
  overview: {
    main: OverviewTabScreen,
  },
  contribution: {
    main: ContributionTabScreen,
  },
};
