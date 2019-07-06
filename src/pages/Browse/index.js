import React from "react";

import { Container, Title, List, Playlist } from "./styles";

const Browse = () => {
  return (
    <Container>
      <Title>Navegar</Title>

      <List>
        <Playlist to="/playlist/1">
          <img
            src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
            alt="img album"
          />
          <strong>Rock dos bons</strong>
          <p>Escuta ai meu!!!</p>
        </Playlist>

        <Playlist to="/playlist/1">
          <img
            src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
            alt="img album"
          />
          <strong>Rock dos bons</strong>
          <p>Escuta ai meu!!!</p>
        </Playlist>

        <Playlist to="/playlist/1">
          <img
            src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
            alt="img album"
          />
          <strong>Rock dos bons</strong>
          <p>Escuta ai meu!!!</p>
        </Playlist>

        <Playlist to="/playlist/1">
          <img
            src="https://img2-placeit-net.s3-accelerate.amazonaws.com/uploads/stage/stage_image/21198/large_thumb_placeit__88_.jpg"
            alt="img album"
          />
          <strong>Rock dos bons</strong>
          <p>Escuta ai meu!!!</p>
        </Playlist>
      </List>
    </Container>
  );
};

export default Browse;
