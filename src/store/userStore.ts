// import {create} from 'zustand';
// import {persist, createJSONStorage} from 'zustand/middleware';
// import AsyncStorage from '@react-native-async-storage/async-storage';
// import {LoginResponeInterface} from '../schema/auth';

// interface UserStore {
//   user: LoginResponeInterface | undefined;
// }

// interface Action {
//   setUser: (user: LoginResponeInterface) => void;
//   delUser: () => void;
// }

// export const useUserStore = create<UserStore & Action>()(
//   persist(
//     (set) => ({
//       user: undefined,
//       setUser: (user) => {
//         set(() => ({user}));
//       },
//       delUser: () => {
//         set(() => ({user: undefined}));
//       },
//     }),
//     {
//       name: 'banshwali-store',
//       storage: createJSONStorage(() => AsyncStorage),
//     },
//   ),
// );
