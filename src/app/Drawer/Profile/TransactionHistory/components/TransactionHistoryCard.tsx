import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ThemedText} from '../../../../../components/ThemedText';
import {TransactionHistoryInterface} from '../../../../../schema/drawer/profile/transaction-history.schema';
import {Colors} from '../../../../../constants/Color';
import supplyShadowEffect from '../../../../../utils/Shadow';

type TransactionHistoryCardProps = {
  transaction: TransactionHistoryInterface;
};

// TraHis: TransactionHistory

const TransactionHistoryCard: React.FC<TransactionHistoryCardProps> = ({
  transaction,
}) => {
  return (
    <View style={styles.TraHisCard}>
      <View style={styles.DateInvoicIdVw}>
        <ThemedText style={styles.Date} type="mediumBold">
          {transaction.Date}
        </ThemedText>
        <ThemedText style={styles.InvoiceID} type="mediumBold">
          {transaction.InvoiceId}
        </ThemedText>
      </View>
      <View style={styles.PayAmtRrmkVw}>
        <ThemedText style={styles.KeyText} type="mediumBold">
          Payment For:{' '}
          <ThemedText style={styles.ValueText} type="light">
            {transaction.PaymentFor}
          </ThemedText>
        </ThemedText>
        <ThemedText style={styles.KeyText} type="mediumBold">
          Amount:{' '}
          <ThemedText style={styles.ValueText} type="light">
            Rs {transaction.Amount}
          </ThemedText>
        </ThemedText>
        <ThemedText style={styles.KeyText} type="mediumBold">
          Remark:{' '}
          <ThemedText style={styles.ValueText} type="light">
            {transaction.Remark}
          </ThemedText>
        </ThemedText>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  TraHisCard: {
    margin: 4,
    borderWidth: 0.5,
    borderColor: Colors.muteGray,
    padding: 10,
    borderRadius: 8,
    backgroundColor: Colors.whiteTunedBG,

    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 3,
      Color: '#000',
      Opacity: 0.15,
      Elevation: 3,
    }),
  },
  DateInvoicIdVw: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    color: Colors.muteText,
  },
  Date: {textAlign: 'left', color: Colors.muteText},
  InvoiceID: {textAlign: 'right', color: Colors.muteText},
  PayAmtRrmkVw: {
    marginTop: 6,
  },
  KeyText: {
    fontSize: 14,
  },
  ValueText: {borderWidth: 1, fontSize: 14},
});

export default TransactionHistoryCard;
