import React from "react";
import Header from "./components/Header";
import Section from "./components/Section";
import Showcase from "./components/Showcase";
import styled from "styled-components";

const AppWrapper = styled.div`
  margin: 0;
  padding: 0;
`;

const App: React.FC = () => {
  return (
    <AppWrapper>
      <Header />
      <Showcase />
      <Section />
    </AppWrapper>
  );
};

export default App;
