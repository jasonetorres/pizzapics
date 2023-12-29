import type { Meta, StoryObj } from "@storybook/react";
import PizzaCard, {
	type PizzaCardProps,
} from "../../components/ui/cards/PizzaCard";
import PostStats from "../../components/ui/shared/PostStats";
import users from "../mocks/users.json";
import currentUser from "../mocks/currentUser.json";

const meta = {
	title: "Cards/PizzaCard",
	component: PizzaCard,
	parameters: {
		layout: "centered",
	},
	tags: ["autodocs"],
	argTypes: {
		// backgroundColor: { control: "color" },
	},
} satisfies Meta<PizzaCardProps>;

export default meta;
type Story = StoryObj<typeof meta>;

const user = {
	id: "1",
	name: "Sarah Shook",
	username: "shook",
	email: "shook@shook.com",
	bio: "",
	imageUrl: "http://placekitten.com/300/300",
};

const post = {
	$id: "1",
	$collectionId: "123",
	$databaseId: "123",
	$createdAt: "12/21/2023",
	$updatedAt: "12/21/2023",
	$permissions: [],
	imageUrl: "http://placekitten.com/300/300",
	creator: { name: "John Doe", imageUrl: "http://placekitten.com/300/300" },
	likes: users,
	data: {
		currentUser,
	},
};

export const Primary: Story = {
	args: {
		user,
		showUser: true,
		showStats: true,

		post,
	},
	decorators: [
		(Story) => (
			<Story>
				<PostStats post={post} userId={user.id} />
			</Story>
		),
	],
};
