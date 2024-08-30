import React from 'react';
import {FlatList, SafeAreaView, StyleSheet, View} from 'react-native';
import {AppScreenNavigationType} from '../../../../core/navigation-type';
import ScreenTopTitle from '../../../../components/ScreenTopTitle';
import BottomSpace from '../../../../components/BottomSpace';
import {TransactionHistoryInterface} from '../../../../schema/drawer/profile/transaction-history.schema';
import TransactionHistoryCard from './components/TransactionHistoryCard';
import EmptyFlatList from '../../../../components/EmptyFlatList';
import {Colors} from '../../../../constants/Color';
import useTranslate from '../../../../hooks/language/translate';

// types and interface
type TransactionHistoryScreenProps = {} & AppScreenNavigationType;

// ----------------- Transaction History Screen ---------------------
const TransactionHistoryScreen: React.FC<TransactionHistoryScreenProps> = ({
  navigation,
}) => {
  const {translateLanguage} = useTranslate();

  return (
    <View style={styles.Page}>
      <SafeAreaView style={styles.Screen}>
        {/* Title */}
        <ScreenTopTitle
          navigation={navigation}
          screenTitle={translateLanguage(
            'Transaction History',
            'लेनदेन इतिहास',
          )}
        />

        {/* Flatlist of Transactions History */}
        <FlatList
          initialNumToRender={5}
          data={dummyData}
          style={styles.FlatlistContainer}
          contentContainerStyle={styles.FlatlistContents}
          showsVerticalScrollIndicator={false}
          renderItem={(item) => (
            <TransactionHistoryCard transaction={item.item} />
          )}
          ListEmptyComponent={<EmptyFlatList message="No TransactionHistory" />}
          keyExtractor={(item) => item.Id}
          ListFooterComponent={<BottomSpace spaceHeight={100} />}
          ListFooterComponentStyle={styles.FlatlistFooter}
        />
        <BottomSpace spaceHeight={'5%'} />
      </SafeAreaView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Page: {
    backgroundColor: Colors.screenBackground,
    flex: 1,
    paddingHorizontal: 24,
  },
  Screen: {
    backgroundColor: Colors.screenBackground,
  },
  FlatlistContainer: {},
  FlatlistContents: {gap: 12},
  FlatlistFooter: {marginBottom: '8%'},
});

let dummyData: TransactionHistoryInterface[] = [
  {
    Id: 'ak35dajf',
    Date: '2045-01-10',
    InvoiceId: '13DKAKA',
    PaymentFor: 'Subscription',
    Amount: 230000,
    Remark: 'Paid via Esewa',
  },
  {
    Id: 'u7hj8sd2',
    Date: '2047-05-14',
    InvoiceId: 'B8G3K9',
    PaymentFor: 'Service',
    Amount: 150000,
    Remark: 'Paid via PayPal',
  },
  {
    Id: 'q9z8w1x4',
    Date: '2046-08-22',
    InvoiceId: 'F2R7Y6',
    PaymentFor: 'Product',
    Amount: 320000,
    Remark: 'Paid via Bank Transfer',
  },
  {
    Id: 'n2o3m5l6',
    Date: '2049-11-03',
    InvoiceId: 'D4S1L7',
    PaymentFor: 'Subscription',
    Amount: 50000,
    Remark: 'Paid via Esewa',
  },
  {
    Id: 'x4k8j3p2',
    Date: '2048-02-17',
    InvoiceId: 'T8J2M4',
    PaymentFor: 'Service',
    Amount: 75000,
    Remark: 'Paid via PayPal',
  },
  {
    Id: 'w5f7c1a9',
    Date: '2045-09-29',
    InvoiceId: 'R3B5G8',
    PaymentFor: 'Product',
    Amount: 120000,
    Remark: 'Paid via Bank Transfer',
  },
  {
    Id: 'z1v2m8b3',
    Date: '2046-06-11',
    InvoiceId: 'L5K8D3',
    PaymentFor: 'Subscription',
    Amount: 200000,
    Remark: 'Paid via Esewa',
  },
  {
    Id: 'm4k7h2j1',
    Date: '2047-12-20',
    InvoiceId: 'P9G2S1',
    PaymentFor: 'Service',
    Amount: 94000,
    Remark: 'Paid via PayPal',
  },
  {
    Id: 'v2d3s6f8',
    Date: '2049-04-25',
    InvoiceId: 'W1H5R3',
    PaymentFor: 'Product',
    Amount: 500000,
    Remark: 'Paid via Bank Transfer',
  },
  {
    Id: 'b7c8l3k2',
    Date: '2048-07-07',
    InvoiceId: 'K2N4M5',
    PaymentFor: 'Subscription',
    Amount: 340000,
    Remark: 'Paid via Esewa',
  },
];

export default TransactionHistoryScreen;
