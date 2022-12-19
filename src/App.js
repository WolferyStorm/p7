import {Routes,Route} from "react-router-dom"
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Header from "./components/Header/Header";


export default function App() {
  return (
    <div className="App">
      <Header/>
        <main>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/About" element={<About/>}/>
          </Routes>
        </main>
    </div>
  );
}
