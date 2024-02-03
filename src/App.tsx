import { Route, Routes } from 'react-router-dom';
import Landing from './pages/Landing';
import Login from './pages/Login';

import ProfileP from './pages/ProfileP';

import Generate from './components/Generate';
import Form from './pages/Form';
import Contact from './pages/Contact';
import About from './pages/About';


const App =()=>{
  return (
    <div className=" min-w-screern min-h-screen bg-white dark:bg-[#1E1E1E]">
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/login" element={<Login />} />

        <Route path="/profile" element={<ProfileP />} />

        <Route path="/generate" element={<Generate />} />
        <Route path="/form" element={<Form />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />

      </Routes>
    </div>
  );
};



export default App
