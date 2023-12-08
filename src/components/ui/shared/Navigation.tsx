import { Route, Routes } from "react-router-dom";
import SigninForm from "@/auth/forms/SigninForm";
import SignupForm from "@/auth/forms/SignupForm";
import AuthLayout from "@/auth/AuthLayout";
import RootLayout from "@/root/RootLayout";
import {
	AllUsers,
	Explore,
	Saved,
	CreatePost,
	EditPost,
	PostDetails,
	Profile,
	Home,
	UpdateProfile,
} from "@/root/pages";
const Navigation = () => {
	return (
		<div className={`flex flex-col`}>
			<Routes>
				{/* public route */}
				<Route element={<AuthLayout />}>
					<Route path='/sign-in' element={<SigninForm />} />
					<Route path='/sign-up' element={<SignupForm />} />
				</Route>
				<Route element={<RootLayout />}>
					<Route index element={<Home />} />
					<Route path='/explore' element={<Explore />} />
					<Route path='/saved' element={<Saved />} />
					<Route path='/all-users' element={<AllUsers />} />
					<Route path='/create-post' element={<CreatePost />} />
					<Route path='/update-post/:id' element={<EditPost />} />
					<Route path='/posts/:id' element={<PostDetails />} />
					<Route path='/profile/:id/*' element={<Profile />} />
					<Route path='/update-profile/:id' element={<UpdateProfile />} />
				</Route>
			</Routes>
		</div>
	);
};

export default Navigation;
