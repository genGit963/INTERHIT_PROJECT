import { StyleSheet, View } from 'react-native';
import React from 'react';
import { ThemedText } from '../../../../../components/ThemedText';
import HeroButton from '../../../../../components/HeroButton';

type NoIDCardProps = {
  callBackIDCardReqModalVisible: (val: boolean) => void;
};

const NoIDCard: React.FC<NoIDCardProps> = ({ callBackIDCardReqModalVisible }) => {
  return (
    <View>
      <ThemedText style={styles.NoIDText}>
        You don&#39;t have any ID card
      </ThemedText>
      <HeroButton
        btnText="Request ID Card"
        onPress={() => callBackIDCardReqModalVisible(true)}
        style={styles.ReqBtn}
      />
    </View>
  );
};

export default NoIDCard;

const styles = StyleSheet.create({
  NoIDText: {
    marginTop: '75%',
    textAlign: 'center',
  },
  ReqBtn: {
    marginTop: '60%',
  },
});
