// import React from 'react';
// import {View} from 'react-native';
// import {z} from 'zod';
// import CustomDropdownSelector from '../../../../../components/CustomDropdownSelector';
// import {useForm} from 'react-hook-form';
// import {zodResolver} from '@hookform/resolvers/zod';
// import {ThemedText} from '../../../../../components/ThemedText';

// // Merge Req SelectDropdown
// const dropdownSchema = z.object({
//   pickedQuery: z.string(),
// });

// type dropdownType = z.infer<typeof dropdownSchema>;

// export default function MergeReqDD() {
//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm<dropdownType>({
//     resolver: zodResolver(dropdownSchema),
//   });

//   const onSubmit = (data: dropdownType) => {
//     console.log('formdata: ', data);
//   };
//   return (
//     <View>
//       <CustomDropdownSelector
//         name="bloodGroup"
//         control={control}
//         label="Blood Group"
//         options={[
//           {label: 'A+', value: 'A+'},
//           {label: 'A-', value: 'A-'},
//           {label: 'B+', value: 'B+'},
//           {label: 'B-', value: 'B-'},
//           {label: 'O+', value: 'O+'},
//           {label: 'O-', value: 'O-'},
//           {label: 'AB+', value: 'AB+'},
//           {label: 'AB-', value: 'AB-'},
//         ]}
//         isRequired
//         error={errors?.pickedQuery}
//       />
//       {errors && <ThemedText>{errors?.pickedQuery}</ThemedText>}
//     </View>
//   );
// }

// // const styles = StyleSheet.create({});
