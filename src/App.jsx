import './App.css'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./components/home/home.jsx";
import { Delete } from "./components/delete/delete.jsx"
import { RegisterCompany } from './components/registerCompany/registerCompany.jsx';
import { RegisterEmployee } from './components/registerEmployee/registerEmployee.jsx';
import { UpdateCompany } from './components/updateCompany/updateCompany.jsx';
import { UpdateEmployee } from './components/updateEmployee/updateEmployee.jsx';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/delete" element={<Delete />} />
        <Route exact path="/registercompany" element={<RegisterCompany/>}/>
        <Route exact path="/registeremployee" element={<RegisterEmployee/>}/>
        <Route exact path="/updateemployee" element={<UpdateEmployee/>}/>
        <Route exact path="/updatecompany" element={<UpdateCompany/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App