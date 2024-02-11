import Animals from "./components/Animals/Animals";
import Blog from "./components/Blog/Blog";
import Contact from "./components/Contact/Contact";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Animals />
      <Blog />
      <Contact />
    </>
  );
};

export default App;
