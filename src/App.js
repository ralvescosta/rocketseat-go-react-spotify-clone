// Frameworks
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";

//Reactotron
import "./config/configReactotron";

//Styles
import GlobalStyle from "./styles/global";
import { Wrapper, Container, Content } from "./styles/components";

//Componentes
import { Sidebar, Player, Header, ErrorBox } from "./components";

// Redux
import store from "./store";

import Routes from "./routes";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Wrapper>
          <Container>
            <Sidebar />
            <Content>
              <ErrorBox />
              <Header />
              <Routes />
            </Content>
          </Container>
          <Player />
        </Wrapper>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
