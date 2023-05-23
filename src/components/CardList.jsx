import React from 'react';
import {
  SimpleGrid,
  Box,
  Button,
  Heading,
  Text,
  space,
  Stack,
} from '@chakra-ui/react';

const CardList = props => {
  const { cards = [] } = props;
  return (
    <SimpleGrid columns={[1, null, 2, 3]} spacing={[4, null, 6]} py={4}>
      {cards.map(card => (
        <Stack key={card.title} _hover={{ shadow: 'md' }} p={2}>
          <Heading as="h3" isTruncated>
            {card.title}
          </Heading>
          <Text>{card.body}</Text>
          <Button as="a" mt={3} variant="solid">
            Read More
          </Button>
        </Stack>
      ))}
    </SimpleGrid>
  );
};

export default CardList;
