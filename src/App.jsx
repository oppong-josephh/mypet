import Animals from "./components/Animals/Animals";
import Home from "./components/Home/Home";
import Navbar from "./components/Navbar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <>
      <Navbar />
      <Home />
      <Animals />
    </>
  );
};

export default App;
