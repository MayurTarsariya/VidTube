import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./Components/Home/Home";
import { Video } from "./Components/Video/Video";
import { useState } from "react";
import { Navbar } from "./Components/Navbar/Navbar";
import { Error } from "./Error";
import { Search } from "./Components/SearchPage/Search";
function App() {
  const [sideBar, setSideBar] = useState(true);
  const [isDark, setIsDark] = useState(true);
  const handleMode = () => {
    setIsDark(!isDark);
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar
            setSideBar={setSideBar}
            handleMode={handleMode}
            isDark={isDark}
          />
          <Home sideBar={sideBar} isDark={isDark} />
        </>
      ),
    },
    {
      path: "/video/:categoryId/:videoId",
      element: (
        <>
          <Navbar
            isDark={isDark}
            handleMode={handleMode}
          />
          <Video isDark={isDark} />
        </>
      ),
    },
    {
      path: '/search/:searchQuery',
      element: (<>
        <>
          <Navbar
            setSideBar={setSideBar}
            handleMode={handleMode}
            isDark={isDark}
          />
          <Search sideBar={sideBar} isDark={isDark} />
        </>
      </>)
    },
    {
      path: "*",
      element: <Error />,
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
