import React from 'react';
import { Badge, HStack } from '@gluestack-ui/themed-native-base';

export function Example() {
  return (
    <HStack space={{ base: 2, sm: 4 }} mx={{ base: 'auto', md: 0 }}>
      <Badge colorScheme="success">SUCCESS</Badge>
      <Badge colorScheme="danger">DANGER</Badge>
      <Badge colorScheme="info">INFO</Badge>
      <Badge colorScheme="coolGray">DARK</Badge>
    </HStack>
  );
}
