// LiteratureAddModal.tsx
import React from 'react';
import {
  Modal,
  StyleSheet,
  View,
  TouchableOpacity,
  Alert,
  ScrollView,
} from 'react-native';
import supplyShadowEffect from '../../../../../utils/Shadow';
import {ThemedText} from '../../../../../components/ThemedText';
import {Colors} from '../../../../../constants/Color';
import BottomSpace from '../../../../../components/BottomSpace';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import CustomTextInput from '../../../../../components/CustomInput';
import {
  literatureSchema,
  LiteratureSchemaType,
} from '../../../../../schema/dashboard/literature.schema';

const LiteratureAddModal = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: (val: boolean) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LiteratureSchemaType>({
    resolver: zodResolver(literatureSchema),
  });

  const onSubmit = (data: LiteratureSchemaType) => {
    console.log('formdata: ', data);
    onClose(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          <TouchableOpacity
            onPress={() => onClose(false)}
            style={styles.DoneButton}>
            <ThemedText style={styles.DoneText} type="mediumBold">
              Cancel
            </ThemedText>
          </TouchableOpacity>

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}>
            <ThemedText type="subtitle">Add Literature</ThemedText>

            <CustomTextInput
              name="author"
              control={control}
              placeholder="Eg: Ram Bahadur Shrestha"
              label="Author"
              isRequired={true}
              error={errors.author}
            />

            <CustomTextInput
              name="birthPlace"
              control={control}
              placeholder="Eg: Dharan, Sunsari"
              label="Birth Place"
              isRequired={true}
              error={errors.birthPlace}
            />

            <CustomTextInput
              name="description"
              control={control}
              placeholder="Eg: सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू....  "
              label="Write Description"
              isRequired={true}
              multiline
              style={styles.writeLiterature}
              error={errors.description}
            />

            <CustomTextInput
              name="writeliterature"
              control={control}
              placeholder="Eg: सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू....  "
              label="Write Literaure"
              isRequired={true}
              multiline
              style={styles.writeLiterature}
              error={errors.description}
            />

            {/* Submit Button */}
            <TouchableOpacity
              onPress={handleSubmit(onSubmit)}
              style={styles.SubmitBtn}>
              <ThemedText type="mediumBold" style={styles.SubmitText}>
                Submit
              </ThemedText>
            </TouchableOpacity>
          </ScrollView>
          <BottomSpace spaceHeight={'4%'} />
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  ModelContainer: {
    height: '85%',
    width: '100%',
    margin: 'auto',
    position: 'absolute',
    bottom: -5,
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
  },
  modalView: {
    backgroundColor: Colors.screenBackground,
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 16,
    height: '100%',
    borderTopRightRadius: 20,
    borderTopLeftRadius: 20,
    ...supplyShadowEffect({
      X_off: 0,
      Y_off: 0,
      Radius: 10,
      Color: '#000',
      Opacity: 0.5,
      Elevation: 10,
    }),
  },

  ScrollContainer: {
    width: '100%',
    // backgroundColor: 'red',
    // borderWidth: 2,
  },
  DoneButton: {
    width: '100%',
    paddingHorizontal: 4,
  },
  DoneText: {
    color: Colors.redColor,
    textAlign: 'right',
    fontSize: 18,
  },
  SubmitBtn: {
    borderWidth: 1,
    backgroundColor: Colors.primary,
    height: 40,
    borderRadius: 10,
    marginVertical: 30,
  },
  SubmitText: {
    fontSize: 20,
    color: Colors.misText,
    textAlign: 'center',
    margin: 'auto',
  },
  writeLiterature: {
    height: 100,
  },
});

export default LiteratureAddModal;
