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
    },

    deleteUser: (state, action) => {
      const { id } =action.payload;
      const uu = state.find(e => e.id == id);
      if (uu) {
        return state.filter(e => e.id !== id);
      } else {
        console.log( "user is not found" );
      }
    }

  }
});

export const { addUser, updateUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;