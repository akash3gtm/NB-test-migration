import React from 'react';
import { VStack, Box, HStack } from 'native-base';

export function Example() {
	return (
		<VStack
			w="80%"
			rounded="md"
			_light={{
				bg: 'darkBlue.100',
			}}
			_dark={{
				bg: 'darkBlue.600',
			}}
			// space={4}
			p={4}
			justifyContent="center"
		>
			<HStack space={2} mb={4}>
				<VStack space={1} flex={1}>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="7px"
						rounded="pill"
						w="80%"
					/>

					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						h="7px"
						rounded="pill"
						w="40%"
					/>
				</VStack>
			</HStack>

			<HStack justifyContent="space-between">
				<Box
					p={2}
					px={3}
					rounded="lg"
					_light={{
						bg: 'green.300',
					}}
					_dark={{
						bg: 'green.400',
					}}
					overflow="hidden"
					w="45%"
				>
					<Box
						_light={{
							bg: 'green.500',
						}}
						_dark={{
							bg: 'green.700',
						}}
						rounded="full"
						size={20}
						right="-52"
						top="-10"
						opacity={0.6}
						zIndex={-1}
						position="absolute"
					/>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="pill"
						h="7px"
					/>
				</Box>
				<Box
					p={2}
					px={3}
					rounded="lg"
					_light={{
						bg: 'red.300',
					}}
					_dark={{
						bg: 'red.400',
					}}
					overflow="hidden"
					w="45%"
				>
					<Box
						_light={{
							bg: 'red.500',
						}}
						_dark={{
							bg: 'red.700',
						}}
						rounded="full"
						size={20}
						right="-52"
						top="-10"
						opacity={0.6}
						zIndex={-1}
						position="absolute"
					/>
					<Box
						_light={{
							bg: 'gray.600',
						}}
						_dark={{
							bg: 'gray.100',
						}}
						rounded="pill"
						h="7px"
					/>
				</Box>
			</HStack>
		</VStack>
	);
}
