import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
// slices
import albumReducer from "./slices/album";
import commentReducer from "./slices/comment";

// ----------------------------------------------------------------------

const rootPersistConfig = {
  key: "root",
  storage,
  keyPrefix: "redux-",
  whitelist: ["album", "comment"],
};

const rootReducer = combineReducers({
  album: persistReducer(rootPersistConfig, albumReducer),
  comment: persistReducer(rootPersistConfig, commentReducer),
});

export { rootPersistConfig, rootReducer };
