import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLoggedIn: false,
    fullName: "",
    userName: "",
    userId: 0,
    roles: "",
    userImage: "",
  },
  reducers: {
    login(state, action) {
      state.userId = action.payload.userId;
      state.isLoggedIn = true;
      state.fullName = action.payload.fullName;
      state.userName = action.payload.email;
      state.userImage = action.payload.image;
      state.roles = action.payload.role;
      console.log("name:", action.payload.name);
      if (localStorage.getItem("loginCredentials") === null) {
        persistLoginData(
          state.isLoggedIn,
          state.fullName,
          state.userId,
          state.userName,
          state.roles,
          state.userImage
        );
      }
    },
    setCurrentRole(state, action) {
      state.currentRole = action.payload.role;
      console.log(state.currentRole);
    },
    logout(state) {
      state.isLoggedIn = false;
      state.fullName = "";
      state.userName = "";
      state.roles = [];
      localStorage.clear();
    },
    updateUserImage(state, action) {
      state.userImage = action.payload;
    },
  },
});

function persistLoginData(isLoggedIn, userId, fullName, userName, roles, image) {
  const dataToPersist = {
    userId: userId,
    isLoggedIn: isLoggedIn,
    fullName: fullName,
    userName: userName,
    roles: roles,
    userImage: image,
  };
  localStorage.setItem("loginCredentials", JSON.stringify(dataToPersist));
}
export const authActions = authSlice.actions;
export default authSlice;
