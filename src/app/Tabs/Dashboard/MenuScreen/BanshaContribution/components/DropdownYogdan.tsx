import React from 'react';
import {StyleSheet, View} from 'react-native';
import ScreenDropDownSelector from '../../../../../../components/ScreenDropdownSelector';

// types
type DropdownYogdanProps = {
  callBackSetDDSelected: (val: string) => void;
};

const DropdownYogdan: React.FC<DropdownYogdanProps> = ({
  callBackSetDDSelected,
}) => {
  return (
    <View style={styles.Container}>
      <ScreenDropDownSelector
        options={[
          {label: 'All', value: 'All'},
          {label: 'Political', value: 'Political'},
          {label: 'Social', value: 'Social'},
          {label: 'Other', value: 'Other'},
        ]}
        defaultValue={'All'}
        callBackSetSelectedValue={callBackSetDDSelected}
        ddViewWidth={120}
      />
    </View>
  );
};

export default DropdownYogdan;

const styles = StyleSheet.create({
  Container: {
    marginTop: 10,
  },
});
