import { call, put } from "redux-saga/effects";
import axios from "../../services/axios";

import { Creators as PlaylistsActions } from "../ducks/playlists";

export function* getPlaylists() {
  try {
    const { data } = yield call(axios.get, "/playlists");
    yield put(PlaylistsActions.getPlayListSuccess(data));
  } catch (err) {
    console.log(err);
  }
}
