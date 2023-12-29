import { Link } from "react-router-dom";
import PostStats from "../shared/PostStats";
import { IUser } from "@/types";
import { Models } from "appwrite";

export interface PizzaCardProps {
	showUser?: boolean;
	showStats: boolean;
	user: IUser;
	post: Models.Document;
}

const PizzaCard = ({ post, showUser, showStats, user }: PizzaCardProps) => {
	return (
		<div>
			<Link to={`/posts/${post.$id}`} className='grid-post_link'>
				<img
					src={post.imageUrl}
					alt='post'
					className='h-full w-full object-cover'
				/>
			</Link>

			<div className='grid-post_user'>
				{showUser && (
					<div className='flex items-center justify-start gap-2 flex-1'>
						{post.creator.imageUrl && (
							<img
								src={
									post.creator.imageUrl ||
									"/assets/icons/profile-placeholder.svg"
								}
								alt='creator'
								className='w-8 h-8 rounded-full'
							/>
						)}
						<p className='line-clamp-1'>{post.creator.name}</p>
					</div>
				)}
				{showStats && <PostStats post={post} userId={user.id} />}
			</div>
		</div>
	);
};

export default PizzaCard;
