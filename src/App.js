import"./App.css";
import { useEffect } from "react";
import Navbar from "./components/pages/Navbar";
import { BrowserRouter , Routes,Route} from "react-router-dom";
import HomePage from "./components/pages/HomePage/HomePage";
import AboutUsPage from "./components/pages/AboutUs/AboutUsPage";
import Courses from "./components/pages/Courses/Courses";
import SignUp from "./components/pages/SignUp";
import Login from "./components/pages/Login";

function App() {
  useEffect(
    ()=>{
      document.title="You-Learn"
    }
  )
  return (
  
    <BrowserRouter basename="/">
      <Navbar/>
      <Routes>
          <Route path="/" exact element={<HomePage/>}>
          </Route>
          <Route path="/about-us" element={<AboutUsPage/>}>
          </Route>
          <Route path="/courses" element={<Courses/>}>
          </Route>
          <Route path="/sign-up" element={<SignUp/>}>
          </Route>
          <Route path="/login" element={<Login/>}>

          </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
