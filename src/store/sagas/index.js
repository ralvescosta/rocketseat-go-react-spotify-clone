import { all, takeLatest } from "redux-saga/effects";

//PlayList
import { Types as PlaylistsTypes } from "../ducks/playlists";
import { getPlaylists } from "./playlists";

//PlayListDetails
import { Types as PlaylistDetailsTypes } from "../ducks/playlistDetails";
import { getPlaylistDetails } from "./playlistDetails";

export default function* rootSaga() {
  yield all([
    takeLatest(PlaylistsTypes.GET_REQUEST, getPlaylists),
    takeLatest(PlaylistDetailsTypes.GET_REQUEST, getPlaylistDetails)
  ]);
}
