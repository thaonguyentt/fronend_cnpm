import { configureStore } from '@reduxjs/toolkit';
import authenticationStore from "./slice/authentication"
export default configureStore({
  reducer: {
    auth: authenticationStore,
  },
});
