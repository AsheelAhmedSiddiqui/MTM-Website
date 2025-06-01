import { Button, ButtonGroup } from "@chakra-ui/react";
import React from "react";

export default function Register() {
	return (
		<div>
			<ButtonGroup>
				<Button colorScheme="blue" variant="solid">
					Register
				</Button>
				<Button colorScheme="gray" variant="outline">
					Cancel
				</Button>
				<Button colorScheme="red" variant="ghost">
					Delete
				</Button>
			</ButtonGroup>
		</div>
	);
}
