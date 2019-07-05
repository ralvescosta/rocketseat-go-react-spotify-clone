import React from "react";

import { Container, NewPlaylist, Nav } from "./styles";

/**
 * assets
 */
import addPlayListIcon from "../../assets/images/add_playlist.svg";

const Sidebar = () => (
  <Container>
    <div>
      <Nav bold>
        <li>
          <a href="!">Navegar</a>
        </li>
        <li>
          <a href="!">Radio</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>SUA BIBLIOTECA</span>
        </li>
        <li>
          <a href="!">Seu Daily Mix</a>
        </li>
        <li>
          <a href="!">Tocadas recentimente</a>
        </li>
        <li>
          <a href="!">Músicas</a>
        </li>
        <li>
          <a href="!">Álbuns</a>
        </li>
        <li>
          <a href="!">Artistas</a>
        </li>
        <li>
          <a href="!">Estações</a>
        </li>
        <li>
          <a href="!">Arquivos locais</a>
        </li>
        <li>
          <a href="!">Vídeos</a>
        </li>
        <li>
          <a href="!">Podcasts</a>
        </li>
      </Nav>

      <Nav>
        <li>
          <span>PLAYLISTS</span>
        </li>
        <li>
          <a href="!">So as melhores!</a>
        </li>
      </Nav>
    </div>
    <NewPlaylist>
      <img src={addPlayListIcon} alt="add playlist" /> Nova Playlist
    </NewPlaylist>
  </Container>
);

export default Sidebar;
