import Navigation from "./components/ui/shared/Navigation";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";

const App = () => {
  return (
    <main className="h-screen">
      <Navigation />
      <Toaster />
    </main>
  );
};

export default App;
