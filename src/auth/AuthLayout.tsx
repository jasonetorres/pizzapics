import { Outlet, Navigate } from "react-router-dom";
import { useUserContext } from "@/context/AuthContext";

export default function AuthLayout() {
  const { isAuthenticated } = useUserContext();

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <section className="flex flex-col xl:flex-row h-screen">
          <div className="flex-1 flex justify-center items-center py-10">
            <Outlet />
          </div>

          <img
            src="/assets/images/pizzapaper.png"
            alt="logo"
            className="hidden xl:block w-1/2 object-cover bg-no-repeat"
          />
        </section>
      )}
    </>
  );
}

{
  /* <div class="flex mb-4">
  <div class="w-1/2 bg-gray-400 h-12"></div>
  <div class="w-1/2 bg-gray-500 h-12"></div>
</div> */
}

//         className="hidden xl:block h-screen object-cover bg-no-repeat"

//   return (
//     <>
//       {isAuthenticated ? (
//         <Navigate to="/" />
//       ) : (
//         <>
//           <section className="flex flex-col xl:flex-row h-screen">
//             <div className="flex-1 flex justify-center items-center py-10">
//               <Outlet />
//             </div>

//             <img
//               src="/assets/images/pizzapaper.png"
//               alt="logo"
//               className="hidden xl:block w-1/2 object-cover bg-no-repeat"
//             />
//           </section>
//         </>
//       )}
//     </>
//   );
// }

// return (
//   <>
//     {isAuthenticated ? (
//       <Navigate to="/" />
//     ) : (
//       <section className="flex flex-col xl:flex-row h-screen">
//         <div className="flex-1 flex justify-center items-center py-10">
//           <Outlet />
//         </div>

//         <img
//           src="/assets/images/pizzapaper.png"
//           alt="logo"
//           className="hidden xl:block w-1/2 object-cover bg-no-repeat"
//         />
//       </section>
//     )}
//   </>
// );

// return (
//   <>
//     {isAuthenticated ? (
//       <Navigate to="/" />
//     ) : (
//       <>
//         <section className="flex flex-1 justify-center items-center flex-col py-10">
//           <Outlet />
//         </section>

//         <img
//           src="/assets/images/pizzapaper.png"
//           alt="logo"
//           className="hidden xl:block h-screen w-1/2 object-cover bg-no-repeat"
//         />
//       </>
//     )}
//   </>
// );
// }

// }
