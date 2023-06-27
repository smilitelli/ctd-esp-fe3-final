import Footer from "./Components/Footer";
import Navbar from "./Components/Navbar";
import { Route, Routes } from "react-router-dom";
import { routes } from "./Routes/routes";
import Home from "./Routes/Home";
import Contact from "./Routes/Contact";
import Detail from "./Routes/Detail";
import Favs from "./Routes/Favs";



function App() {
  return (
      <div className="App">
          <Navbar/>
          <Routes>
              <Route path={routes.home} element={<Home />} />
              <Route path={routes.contact} element={<Contact />} />
              <Route path={routes.detail} element={<Detail />} />
              <Route path={routes.favs} element={<Favs />} />
          </Routes>
          <Footer/>
      </div>
  );
}

export default App;
