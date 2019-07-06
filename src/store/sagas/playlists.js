import { call, put } from "redux-saga/effects";
import axios from "../../services/axios";

import { Creators as PlaylistsActions } from "../ducks/playlists";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylists() {
  try {
    const { data } = yield call(axios.get, "/playlists");
    yield put(PlaylistsActions.getPlayListSuccess(data));
  } catch (err) {
    yield put(
      ErrorActions.setError("Não foi possivel obter os detalhes da playlist")
    );
  }
}
