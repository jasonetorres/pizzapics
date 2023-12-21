import { useUserContext } from "@/context/AuthContext";
import { Models } from "appwrite";
import PizzaCard from "../cards/PizzaCard";

type GridPostListProps = {
	posts: Models.Document[];
	showUser?: boolean;
	showStats?: boolean;
};

const GridPostList = ({
	posts,
	showUser = true,
	showStats = true,
}: GridPostListProps) => {
	const { user } = useUserContext();

	return (
		<ul className='grid-container'>
			{posts.map((post) => (
				<li key={post.$id} className='relative min-w-80 h-80'>
					<PizzaCard showUser showStats user={user} post={post} />
				</li>
			))}
		</ul>
	);
};

export default GridPostList;
