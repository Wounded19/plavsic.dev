import React from "react";
import { Heading, Box, Flex } from "@chakra-ui/core";
import styled from "@emotion/styled";

import Container from "../components/Container";

const NavStyles = styled(Flex)`
  position: sticky;
  top: 0;
`;

// Počinjem ovde, klasična HTML5 struktura, pa ćemo razdeliti u komponente po potrebi.
const Homepage = () => {
  return (
    <Container>
      {/* <header>HEADER</header> */}
      {/* <Nav></Nav> */}
      <main>
        <Heading>Poy</Heading>
      </main>
      <footer>Rešim sajt čim uhvatim vremena!</footer>
    </Container>
  );
};

// TODO
// Uskoro ima svoju komponentu kad rešim.
// Definitivno hoću da Navigacija bude always visible dok se skrola.

const Nav = () => {
  return (
    <NavStyles>
      <Box>NAVIGACIJA</Box>
    </NavStyles>
  );
};

export default Homepage;
