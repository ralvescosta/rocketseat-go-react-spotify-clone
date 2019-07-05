import React from "react";

import { Container, Search, User } from "./styles";

const Header = () => (
  <Container>
    <Search>
      <input placeholder="Search" />
    </Search>
    <User>
      <img
        src="https://avatars0.githubusercontent.com/u/45952161?v=4"
        alt="avatar"
      />
      Rafael Alves
    </User>
  </Container>
);

export default Header;
