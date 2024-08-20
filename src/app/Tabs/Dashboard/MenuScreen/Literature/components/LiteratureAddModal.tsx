// LiteratureAddModal.tsx
import React from 'react';
import { Modal, StyleSheet, View, ScrollView } from 'react-native';
import supplyShadowEffect from '../../../../../../utils/Shadow';
import { ThemedText } from '../../../../../../components/ThemedText';
import { Colors } from '../../../../../../constants/Color';
import BottomSpace from '../../../../../../components/BottomSpace';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import CustomTextInput from '../../../../../../components/CustomInput';
import HeroButton from '../../../../../../components/HeroButton';
import {
  literatureZSchema,
  LiteratureZType,
} from '../../../../../../schema/tabs/dashboard/literature.schema';

const LiteratureAddModal = ({
  isVisible,
  modalVisibile,
}: {
  isVisible: boolean;
  modalVisibile: (val: boolean) => void;
}) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<LiteratureZType>({
    resolver: zodResolver(literatureZSchema),
  });

  const onSubmit = (data: LiteratureZType) => {
    console.log('formdata: ', data);
    modalVisibile(false);
  };

  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={isVisible}
      onRequestClose={() => {
        modalVisibile(false);
      }}>
      <View style={styles.ModelContainer}>
        <View style={styles.modalView}>
          {/* cancel btn */}
          <HeroButton
            btnText="Cancel"
            varient="cancel"
            onPress={() => modalVisibile(false)}
          />

          {/* Content View */}
          <ScrollView
            style={styles.ScrollContainer}
            contentContainerStyle={{}}
            showsVerticalScrollIndicator={false}>
            <ThemedText type="subtitle">Add Literature</ThemedText>

            {/* author_image baaki chha */}

            <CustomTextInput
              name="title"
              control={control}
              placeholder="Eg: Literature title"
              label="Title"
              isRequired={true}
              error={errors.title}
            />

            <CustomTextInput
              name="author"
              control={control}
              placeholder="Eg: Ram Bahadur Shrestha"
              label="Author"
              isRequired={true}
              error={errors.author}
            />

            <CustomTextInput
              name="birth_place"
              control={control}
              placeholder="Eg: Dharan, Sunsari"
              label="Birth Place"
              isRequired={true}
              error={errors.birth_place}
            />

            <CustomTextInput
              name="content"
              control={control}
              placeholder="Eg: सामाजिक न्याय र एकता नेपालको मनमा, धरतीमा, इतिहासका कथाहरू....  "
              label="Write Description"
              isRequired={true}
              multiline
              style={styles.writeLiterature}
              error={errors.content}
            />

            {/* Submit Button */}
            <HeroButton
              btnText="Submit"
              style={styles.SubmitBtn}
              onPress={handleSubmit(onSubmit)}
            />
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
  SubmitBtn: { marginVertical: 30 },
  writeLiterature: {
    height: 100,
  },
});

export default LiteratureAddModal;
