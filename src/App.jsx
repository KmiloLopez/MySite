import { Route, Routes } from "react-router-dom";

import AboutMe from "./pages/Personal/aboutMe";
import SharedLayout from "./components/SharedLayout/SharedLayout";
import ContactMe from "./pages/ContactMe/ContactMe";
import Home from "./pages/Home/Home";

import AnimatedBackground from "./components/AnimatedBackground/AnimatedBackground";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/Home" element={<Home />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/ContactMe" element={<ContactMe />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
