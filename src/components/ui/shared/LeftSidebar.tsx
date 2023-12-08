import { INITIAL_USER, useUserContext } from "@/context/AuthContext";
import { useSignOutAccount } from "@/lib/react-query/queriesAndMutations";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import Loader from "./Loader";
import { sidebarLinks } from "@/constants";
import { INavLink } from "@/types";
import { Button } from "../button";

const LeftSidebar = () => {
	const navigate = useNavigate();
	const { pathname } = useLocation();
	const { user, setUser, setIsAuthenticated, isLoading } = useUserContext();

	const { mutate: signOut } = useSignOutAccount();

	const handleSignOut = async (
		e: React.MouseEvent<HTMLButtonElement, MouseEvent>
	) => {
		e.preventDefault();
		signOut();
		setIsAuthenticated(false);
		setUser(INITIAL_USER);
		navigate("/sign-in");
	};

	return (
		<nav className='leftsidebar hidden md:flex flex-col gap-11'>
			<Link to='/' className='flex gap-3 items-center'>
				<img
					className='w-16 rounded-half '
					src='/assets/images/logopizza.JPG'
				/>
			</Link>

			{isLoading || !user.email ? (
				<div className='h-14'>
					<Loader />
				</div>
			) : (
				<Link to={`/profile/${user.id}`} className='flex gap-3 items-center'>
					<img
						src={user.imageUrl || "/assets/icons/profile-placeholder.svg"}
						alt='profile'
						className='h-14 w-14 rounded-full'
					/>
					<div className='flex flex-col'>
						<p className='body-bold'>{user.name}</p>
						<p className='small-regular text-light-3'>@{user.username}</p>
					</div>
				</Link>
			)}

			<ul className='flex flex-col gap-10'>
				{sidebarLinks.map((link: INavLink) => {
					const isActive = pathname === link.route;

					return (
						<li
							key={link.label}
							className={`leftsidebar-link group ${
								isActive && "bg-primary-500"
							}`}>
							<NavLink
								to={link.route}
								className='flex gap-4 items-center  group hover:font-semibold transition-all'>
								<img
									src={link.imgURL}
									alt={link.label}
									className={`group-hover:invert-white group-hover:scale-110 transition-all ${
										isActive && "invert-white"
									}`}
								/>
								{link.label}
							</NavLink>
						</li>
					);
				})}

				<li className='group'>
					<Button
						variant='ghost'
						className='flex gap-4 group items-center transition-all p-0 hover:bg-transparent'
						onClick={(e) => handleSignOut(e)}>
						<img
							src='/assets/icons/logout.svg'
							alt='logout'
							className='group-hover:scale-110 transition-all'
						/>
						<p className='small-medium lg:base-medium group-hover:font-bold transition-all'>
							Logout
						</p>
					</Button>
				</li>
			</ul>
		</nav>
	);
};

export default LeftSidebar;
