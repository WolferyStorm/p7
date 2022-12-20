import {Routes,Route} from "react-router-dom"
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Fiche from "./pages/Fichelogement";
import Error from "./pages/Error";
import Footer from "./components/Footer"

export default function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
            <Route path="/logement/:id" element={<Fiche />}/>
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
      <Footer/>
    </div>
  );
}
