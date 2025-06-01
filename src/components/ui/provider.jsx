"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { ColorModeProvider, LightMode } from "./color-mode";

export function Provider(props) {
	return (
		<ChakraProvider value={LightMode}>
			<ColorModeProvider {...props} />
		</ChakraProvider>
	);
}
