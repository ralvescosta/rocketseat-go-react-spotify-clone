import { combineReducers } from "redux";

//Reducers
import playlists from "./playlists";
import playlistDetails from "./playlistDetails";

export default combineReducers({
  playlists,
  playlistDetails
});
