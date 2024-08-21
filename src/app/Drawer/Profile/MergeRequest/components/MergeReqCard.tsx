import React from 'react';
import { StyleSheet, View } from 'react-native';
import { MergeRequestInterface } from '../../../../../schema/drawer/profile/mergeRequest.schema';
import { ThemedText } from '../../../../../components/ThemedText';
import { Colors } from '../../../../../constants/Color';

// props type

type MergeReqCardProps = {
  MergeReqData: MergeRequestInterface;
};

const MergeReqCard: React.FC<MergeReqCardProps> = ({ MergeReqData }) => {
  return (
    <View style={styles.MergeReqCardView}>
      {/* Detail */}
      <View style={styles.MergeReqDetail}>
        <ThemedText type="muted">{MergeReqData.Date}</ThemedText>
        <ThemedText type="mediumBold">Request To</ThemedText>
        <ThemedText style={styles.MergeReToName} type="semiBold">
          {MergeReqData.RequestTo}
        </ThemedText>
      </View>

      {/* Status */}
      <View
        style={[
          styles.StatusView,

          {
            backgroundColor:
              MergeReqData.verifiedStatus === 'verified'
                ? Colors.greenLightest
                : Colors.redLightest,
          },
        ]}>
        <View
          style={[
            styles.Circle,
            {
              backgroundColor:
                MergeReqData.verifiedStatus === 'verified'
                  ? Colors.greenMain
                  : Colors.redMain,
            },
          ]}
        />
        <ThemedText
          style={[
            styles.VerifyText,
            {
              color:
                MergeReqData.verifiedStatus === 'verified'
                  ? Colors.greenDark
                  : Colors.redDark,
            },
          ]}
          type="mediumBold">
          {MergeReqData.verifiedStatus}
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  MergeReqCardView: {
    display: 'flex',
    flexDirection: 'row',
    padding: 10,
    justifyContent: 'space-between',
    backgroundColor: Colors.whiteTunedBG,
    borderRadius: 10,
    alignItems: 'center',
  },
  MergeReqDetail: {
    // backgroundColor: 'yellow',
    width: '60%',
  },
  MergeReToName: {},
  StatusView: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    width: '26%',
    gap: 6,
    paddingVertical: 2,
    paddingHorizontal: 8,
    borderRadius: 16,
  },
  Circle: {
    height: 13,
    width: 13,
    borderRadius: 10,
    // margin: 'auto',
  },
  VerifyText: {
    fontSize: 13,
  },
});

export default MergeReqCard;
