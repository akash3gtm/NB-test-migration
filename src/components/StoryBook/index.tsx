import React from 'react';
import {
	Box,
	Center,
	Heading,
	Pressable,
	useColorModeValue,
} from 'native-base';
import { mapping } from '../../config/map';

export function StoryBook({
	navigation,
	name,
	_box: { lightGrad, darkGrad, ..._box },
	_heading,
	...props
}: any) {
	const Example = mapping[name].basic.Example;
	const gradColors = useColorModeValue(lightGrad, darkGrad) || [
		'gray.700',
		'white',
	];

	return (
		<Pressable
			flex={1}
			{...props}
			onPress={() =>
				navigation.navigate('component', {
					name: name,
				})
			}
			// minH={32}
			rounded="lg"
			position="relative"
			overflow="hidden"
			w="100%"
			bg={useColorModeValue('white', 'blueGray.900')}
		>
			<Box
				flex={1}
				{..._box}
				bg={{
					linearGradient: {
						colors: gradColors,
						start: [0, 0],
						end: [0, 1],
					},
				}}
				pointerEvents="none"
			>
				<Center flex={1}>
					<Heading
						size="xs"
						position="absolute"
						top={2}
						left={2}
						style={{ textTransform: 'uppercase' }}
						color={gradColors[1]}
						{..._heading}
					>
						{name}
					</Heading>
					{/* 
					<Center
						position="absolute"
						top={8}
						right={1}
						left={1}
						bottom={1}
						_light={{
							bg: gradColors[1],
						}}
						_dark={{
							bg: 'coolGray.800',
						}}
					> */}
					<Example />
					{/* </Center> */}
				</Center>
			</Box>
		</Pressable>
	);
}
