import React from "react";

import { Container, Header, SongList } from "./styles";

import clockIcon from "../../assets/images/clock.svg";
import PlusIcon from "../../assets/images/plus.svg";
const Playlist = () => {
  return (
    <Container>
      <Header>
        <img
          src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
          alt="img album"
        />
        <div>
          <span>PLAYLIST</span>
          <h1>Rock Favorite</h1>
          <p>13 Musicas</p>

          <button>PLAY</button>
        </div>
      </Header>

      <SongList cellPadding={0} cellSpacing={0}>
        <thead>
          <th />
          <th>Título</th>
          <th>Artista</th>
          <th>Album</th>
          <th>
            <img src={clockIcon} alt="clock" />
          </th>
        </thead>
        <tbody>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
          <tr>
            <td>
              <img src={PlusIcon} alt="Add" />
            </td>
            <td>Papercut</td>
            <td>Linkin Park</td>
            <td>Hybrid Theory</td>
            <td>3:26</td>
          </tr>
        </tbody>
      </SongList>
    </Container>
  );
};

export default Playlist;
