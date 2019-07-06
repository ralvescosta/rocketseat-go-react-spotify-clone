import { call, put } from "redux-saga/effects";
import axios from "../../services/axios";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";

export function* getPlaylistDetails(action) {
  try {
    const { data } = yield call(
      axios.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(PlaylistDetailsActions.getPlayListDetailsSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
