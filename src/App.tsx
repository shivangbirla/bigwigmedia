import { Route, Routes } from "react-router-dom";
import Landing from "./pages/Landing";
import Login from "./pages/Login";

import Generate from "./components/Generate";
import Generate2 from "./components/Generate2";
import Form from "./pages/Form";
import Contact from "./pages/Contact";
import About from "./pages/About";
import Failed from "./pages/Failed";
import Plan from "./pages/Plan";
import Blog from "./pages/Blog";
import Profile from "./pages/Profile";
import Admin from "./pages/Admin";
import Success from "./pages/Success";
import Terms from "./pages/Terms";
import Transaction from "./pages/Transaction";
import Privacy from "./pages/Privacy";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { clarity } from "react-microsoft-clarity";

import ReactGA from "react-ga";
// Initialize React Ga with your tracking ID
ReactGA.initialize("G-BWWD8V0SE5");

const App = () => {
  clarity.init("l99zq2nph0");
  const location = useLocation();
  useEffect(() => {
    ReactGA.pageview(location.pathname + location.search);
  }, [location]);
  return (
    <div className=" min-w-screen min-h-screen bg-white dark:bg-[#1E1E1E]">
      <Routes>
        <Route path="/" element={<Landing />} />
        {/* <Route path="/2" element={<Landing />} /> */}
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<Profile />} />

        {/* <Route path="/generate" element={<Generate />} /> */}
        <Route path="/generate" element={<Generate2 />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cancel" element={<Failed />} />
        <Route path="/success" element={<Success />} />
        <Route path="/about" element={<About />} />
        <Route path="/plan" element={<Plan />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/transaction" element={<Transaction />} />
        <Route path="/privacy" element={<Privacy />} />
      </Routes>
    </div>
  );
};

export default App;
