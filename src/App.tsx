import Navigation from "./components/ui/shared/Navigation";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const App = () => {
	return (
		<main className='flex h-screen p-4 md:p-6 lg:p-8'>
			<Navigation />
			<Toaster />
		</main>
	);
};

export default App;
