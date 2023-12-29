import type { Preview } from "@storybook/react";
import { MemoryRouter } from "react-router-dom";
import { QueryProvider } from "../src/lib/react-query/QueryProvider";

const preview: Preview = {
	actions: { argTypesRegex: "^on[A-Z].*" },
	controls: {
		matchers: {
			color: /(background|color)$/i,
			date: /Date$/i,
		},
	},
	decorators: [
		(Story) => (
			<QueryProvider>
				<MemoryRouter initialEntries={["/"]}>
					<Story />
				</MemoryRouter>
			</QueryProvider>
		),
	],
};

export default preview;
