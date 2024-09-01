import {createSlice} from '@reduxjs/toolkit';
import {StoredUserType} from '../../../schema/auth';

type UserType = {
  appUser: StoredUserType | null;
};

const initialState: UserType = {
  appUser: null,
};

const userSlice = createSlice({
  name: 'app-user',
  initialState,
  reducers: {
    setAppUser: (state, action) => {
      state.appUser = action.payload;
    },
  },
});

export default userSlice.reducer;
export const {setAppUser} = userSlice.actions;
