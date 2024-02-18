import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

import ProfileP from "./pages/ProfileP";

import Generate from "./components/Generate";
import Generate2 from "./components/Generate2";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Failed from "./pages/Failed";
import Plan from "./pages/Plan";

const App = () => {
  return (
    <div className=" min-w-screern min-h-screen bg-white dark:bg-[#1E1E1E]">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/2" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<ProfileP />} />

        {/* <Route path="/generate" element={<Generate />} /> */}
        <Route path="/generate" element={<Generate2 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />X
        <Route path="/failed" element={<Failed />} />X
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
      </Routes>
    </div>
  );
};

export default App;
