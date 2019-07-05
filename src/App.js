import React from "react";

import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

import { Sidebar, Player, Header } from "./components";

function App() {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Sidebar />
          <Content>
            <Header />
          </Content>
        </Container>
        <Player />
      </Wrapper>
    </>
  );
}

export default App;
