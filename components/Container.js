import { Flex, useColorMode } from "@chakra-ui/core";

// Prihvata props.
// Pošto će teme biti light i dark, klasika po charka dokumentaciji ništa novo
// Isto i za boju teksta
const Container = (props) => {
  const { colorMode } = useColorMode();

  const bgColor = { light: "gray.50", dark: "gray.900" };

  const color = { light: "black", dark: "white" };

  return (
    <Flex
      direction="column"
      alignItems="center"
      justifyContent="flex-start"
      bg={bgColor[colorMode]}
      color={color[colorMode]}
      {...props}
    />
  );
};

export default Container;
