import { HashRouter, Route, Routes } from "react-router-dom";
import CharacterDetail from "./components/CharacterDetail";;
import UserInput from "./components/UserInput";
import "./App.css";
import Pokedex from "./components/Pokedex";
import ProtectedRoutes from "./components/ProtectedRoutes";

function App() {


  
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<UserInput />} />
        <Route element={<ProtectedRoutes />}>
        <Route path="/pokedex" element={<Pokedex />} />
        <Route path="/pokedex/:id" element={<CharacterDetail />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
