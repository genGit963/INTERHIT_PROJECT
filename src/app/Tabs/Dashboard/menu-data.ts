import {SCREEN_NAME} from '../../../core/AppScreen';

// icons
import AlekhSvg from '../../../assets/svg/pen_paper.svg';
import BanshaContributionSvg from '../../../assets/svg/contribution.svg';
import DownloadSvg from '../../../assets/svg/download.svg';
import GallerySvg from '../../../assets/svg/image.svg';
import KulmandirSvg from '../../../assets/svg/temple.svg';
import LiteratureSvg from '../../../assets/svg/book.svg';
import TopContributerSvg from '../../../assets/svg/top-contribution.svg';

export interface MenuScreenDataInterface {
  Icon: React.FunctionComponent;
  labelEN: string;
  labelNP: string;
  route: string;
}

export const menuScreenData: MenuScreenDataInterface[] = [
  {
    Icon: AlekhSvg,
    labelEN: 'Alekh',
    labelNP: 'आलेख',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.ALEKH,
  },
  {
    Icon: LiteratureSvg,
    labelEN: 'Literature',
    labelNP: 'साहित्य',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.LITERATURE,
  },
  {
    Icon: GallerySvg,
    labelEN: 'Gallery',
    labelNP: 'ग्यालेरी',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.GALLERY,
  },
  {
    Icon: KulmandirSvg,
    labelEN: 'Kul Mandir',
    labelNP: 'कुल मन्दिर',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.KULMANDIR,
  },
  {
    Icon: BanshaContributionSvg,
    labelEN: 'Bansha Yogdan',
    labelNP: 'बंश योगदान',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.BANSHACONTRIBUTION,
  },
  {
    Icon: TopContributerSvg,
    labelEN: 'Top Contributer',
    labelNP: 'शीर्ष योगदानकर्ता',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.TOPCONTRIBUTION,
  },
  {
    Icon: DownloadSvg,
    labelEN: 'Download',
    labelNP: 'डाउनलोड',
    route: SCREEN_NAME.TABS.DASHBOARD.MENUSCREEN.DOWNLOAD,
  },
];
