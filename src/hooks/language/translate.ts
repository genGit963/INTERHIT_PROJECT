// useTranslate.ts
import {useSelector} from 'react-redux';
import {RootState} from '../../redux/store';

const useTranslate = () => {
  const {language} = useSelector((state: RootState) => state.language);

  const translateLanguage = (en: string, np: string) => {
    return language === 'english' ? en : np;
  };

  return {translateLanguage};
};

export default useTranslate;
