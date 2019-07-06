import { call, put } from "redux-saga/effects";
import axios from "../../services/axios";

import { Creators as PlaylistDetailsActions } from "../ducks/playlistDetails";
import { Creators as ErrorActions } from "../ducks/error";

export function* getPlaylistDetails(action) {
  try {
    const { data } = yield call(
      axios.get,
      `/playlists/${action.payload.id}?_embed=songs`
    );
    yield put(PlaylistDetailsActions.getPlayListDetailsSuccess(data));
  } catch (err) {
    yield put(
      ErrorActions.setError("Não foi possivel obter os detalhes da playlist")
    );
  }
}
