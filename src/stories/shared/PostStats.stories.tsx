import { Meta, StoryObj } from "@storybook/react";
import PostStats, {
	type PostStatsProps,
} from "../../components/ui/shared/PostStats";
import users from "../mocks/users.json";
//import { CurrentUser } from "../mocks/currentUser.json";
//import * as OriginalQueriesAndMutations from "@/lib/react-query/queriesAndMutations";

//const currentUser: CurrentUser = { ... };

const meta = {
	title: "Shared/PostStats",
	component: PostStats,
	parameters: {
		layout: "centered",
	},
} as Meta<PostStatsProps>;

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
	likes: [...users], // Add sample likes array if needed
};

export const Primary: Story = {
	args: {
		post,
		userId: user.id,
	},
};
