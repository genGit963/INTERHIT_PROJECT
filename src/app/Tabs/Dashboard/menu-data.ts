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
  label: string;
  route: string;
}

export const menuScreenData: MenuScreenDataInterface[] = [
  {
    Icon: AlekhSvg,
    label: 'Alekh',
    route: SCREEN_NAME.MENUSCREEN.ALEKH,
  },
  {
    Icon: LiteratureSvg,
    label: 'Literature',
    route: SCREEN_NAME.MENUSCREEN.LITERATURE,
  },
  {
    Icon: GallerySvg,
    label: 'Gallery',
    route: SCREEN_NAME.MENUSCREEN.GALLERY,
  },
  {
    Icon: KulmandirSvg,
    label: 'Kul Mandir',
    route: SCREEN_NAME.MENUSCREEN.KULMANDIR,
  },
  {
    Icon: BanshaContributionSvg,
    label: 'Bansha Contribution',
    route: SCREEN_NAME.MENUSCREEN.BANSHACONTRIBUTION,
  },
  {
    Icon: TopContributerSvg,
    label: 'Top Contributer',
    route: SCREEN_NAME.MENUSCREEN.TOPCONTRIBUTION,
  },
  {
    Icon: DownloadSvg,
    label: 'Download',
    route: SCREEN_NAME.MENUSCREEN.DOWNLOAD,
  },
];
