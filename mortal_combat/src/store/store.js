import { configureStore } from "@reduxjs/toolkit";
import gameData from "./reducers/gameData";

export default configureStore({
  reducer: { gameData },
});
