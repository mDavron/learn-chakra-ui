import React from 'react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { Box, Container, Flex, Image, useColorMode } from '@chakra-ui/react';
import logo from '../logo.svg';

const Header = () => {
  const { colorMode } = useColorMode();
  return (
    <Box as="header" py={2} bg={colorMode === 'dark' ? 'gray.700' : 'gray.200'}>
      <Container maxW="container.lg">
        <Flex justifyContent="space-between" alignItems="center">
          <Image src={logo} alt="logo" boxSize="40px" objectFit="cover" />
          <ColorModeSwitcher />
        </Flex>
      </Container>
    </Box>
  );
};

export default Header;
//  <ColorModeSwitcher justifySelf="flex-end" />
