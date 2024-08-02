// import React, {useState} from 'react';
// import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
// import {
//   DrawerContentScrollView,
//   DrawerItem,
//   DrawerContentComponentProps,
// } from '@react-navigation/drawer';

// interface MenuProps {
//   label: string;
//   items: Array<{label: string; navigateTo: string}>;
//   isExpanded: boolean;
//   onPress: () => void;
//   navigation: DrawerContentComponentProps['navigation'];
// }

// const Menu: React.FC<MenuProps> = ({
//   label,
//   items,
//   isExpanded,
//   onPress,
//   navigation,
// }) => (
//   <>
//     <TouchableOpacity onPress={onPress}>
//       <Text style={styles.drawerItem}>{label}</Text>
//     </TouchableOpacity>
//     {isExpanded && (
//       <View style={styles.subMenu}>
//         {items.map((item, index) => (
//           <DrawerItem
//             key={index}
//             label={item.label}
//             onPress={() => navigation.navigate(item.navigateTo)}
//           />
//         ))}
//       </View>
//     )}
//   </>
// );

// const CustomDrawerContent: React.FC<DrawerContentComponentProps> = (props) => {
//   const [isCommitteeExpanded, setCommitteeExpanded] = useState(false);
//   const [isAboutUsExpanded, setAboutUsExpanded] = useState(false);

//   const committeeItems = [
//     {label: 'Sadhashya Member', navigateTo: 'SadhashyaMember'},
//     {label: 'Central Committee', navigateTo: 'CentralCommittee'},
//     {label: 'Committee History', navigateTo: 'CommitteeHistory'},
//     {label: 'Province Committee', navigateTo: 'ProvinceCommittee'},
//     {label: 'District Committee', navigateTo: 'DistrictCommittee'},
//     {label: 'Banshawali Committee', navigateTo: 'BanshawaliCommittee'},
//     {label: 'Finance Committee', navigateTo: 'FinanceCommittee'},
//   ];

//   const aboutUsItems = [
//     {label: 'About Organization', navigateTo: 'AboutOrganization'},
//     {label: 'Well Wishes', navigateTo: 'WellWishes'},
//     {label: "Chairman's Messages", navigateTo: 'ChairmansMessages'},
//     {label: "Editor's Message", navigateTo: 'EditorsMessage'},
//   ];

//   return (
//     <DrawerContentScrollView {...props}>
//       <View style={styles.profileContainer}>
//         <Text style={styles.profileName}>Bhakta Bahadur Godar</Text>
//         <Text style={styles.profileEmail}>example@gmail.com</Text>
//       </View>
//       <DrawerItem
//         label="Profile"
//         onPress={() => props.navigation.navigate('Profile')}
//       />

//       <Menu
//         label="Committee"
//         items={committeeItems}
//         isExpanded={isCommitteeExpanded}
//         onPress={() => setCommitteeExpanded(!isCommitteeExpanded)}
//         navigation={props.navigation}
//       />

//       <Menu
//         label="About Us"
//         items={aboutUsItems}
//         isExpanded={isAboutUsExpanded}
//         onPress={() => setAboutUsExpanded(!isAboutUsExpanded)}
//         navigation={props.navigation}
//       />

//       <DrawerItem
//         label="Settings"
//         onPress={() => props.navigation.navigate('Settings')}
//       />
//       <DrawerItem
//         label="App Update"
//         onPress={() => props.navigation.navigate('AppUpdate')}
//       />
//       <DrawerItem
//         label="Feedback"
//         onPress={() => props.navigation.navigate('Feedback')}
//       />
//       <DrawerItem
//         label="Privacy Policy"
//         onPress={() => props.navigation.navigate('PrivacyPolicy')}
//       />
//       <DrawerItem
//         label="Help & FAQs"
//         onPress={() => props.navigation.navigate('HelpFaqs')}
//       />
//       <DrawerItem
//         label="Terms & Conditions"
//         onPress={() => props.navigation.navigate('TermsConditions')}
//       />
//       <DrawerItem
//         label="Log Out"
//         onPress={() => props.navigation.navigate('Logout')}
//       />
//     </DrawerContentScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   profileContainer: {
//     padding: 16,
//     backgroundColor: '#0047ab',
//     alignItems: 'center',
//   },
//   profileName: {
//     color: '#fff',
//     fontSize: 18,
//   },
//   profileEmail: {
//     color: '#fff',
//     fontSize: 14,
//   },
//   drawerItem: {
//     padding: 16,
//     fontSize: 16,
//   },
//   subMenu: {
//     paddingLeft: 16,
//   },
// });

// export default CustomDrawerContent;
