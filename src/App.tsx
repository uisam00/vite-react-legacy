import styled from "styled-components";

import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCoffee } from "@fortawesome/free-solid-svg-icons";

const Content = styled.div`
  display: flex;
  flex-direction: row;
  gap: 10px;
  align-items: center;
  justify-content: center;
`;

const App = () => {

  return (
    <Content>
      <FontAwesomeIcon icon={faCoffee} width={60} height={60} />
      <p>Hello World!</p>
    </Content>
  );
};

export default App;
