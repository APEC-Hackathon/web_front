import { createSlice } from '@reduxjs/toolkit'
import {User} from "../../client";

interface UserState {
  value: User;
}

const initialState: UserState = {
  value: {} as User,
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.value = action.payload
    }
  }
})

export const { setUser } = userSlice.actions

export default userSlice.reducer