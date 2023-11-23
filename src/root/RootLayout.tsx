import Bottombar from "@/components/ui/shared/Bottombar"
import LeftSidebar from "@/components/ui/shared/LeftSidebar"
import Topbar from "@/components/ui/shared/Topbar"
import { Outlet } from 'react-router-dom'


const RootLayout = () => {
  return (
    <div className="w-full md:block justify-center">
      <Topbar />
      <div className="flex">
        <LeftSidebar />

        <section className="flex flex-1 h-full">
          <Outlet />
        </section>
      </div>

      <Bottombar />
    </div>
  );
};

export default RootLayout;