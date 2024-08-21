import { createSlice } from "@reduxjs/toolkit";
import userList from "./data";

const userSlice = createSlice({
  name: "users",
  initialState: userList,
  reducers: {

    addUser: (state, action) => {
      state.push(action.payload);
    },

    updateUser: (state, action) => {
      const { id, uname, uemail } = action.payload;
      const uu = state.find(user => user.id == id);
      if (uu) {
        uu.name = uname;
        uu.email = uemail;
      } else {
        console.log("user is not found")
      }
    }
  }
});

export const { addUser,updateUser } = userSlice.actions;

export default userSlice.reducer;