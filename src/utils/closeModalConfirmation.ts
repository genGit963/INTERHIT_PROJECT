import {Alert} from 'react-native';

type closeFormProps = {
  formName: string;
  cancelQuestion: string;
  yes: string;
  no: string;
  callbackModalVisible: (isVisible: boolean) => void;
};

export const confirmFormClose = ({
  formName,
  cancelQuestion,
  yes,
  no,
  callbackModalVisible,
}: closeFormProps) => {
  Alert.alert(formName, cancelQuestion, [
    {
      text: yes,
      onPress: () => callbackModalVisible(false),
    },
    {
      text: no,
      onPress: () => {},
    },
  ]);
};
