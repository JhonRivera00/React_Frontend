import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";

import Inicio from "../components/Pages/Inicio";
import Charla from "../components/Pages/Charla/Charla";
import Contactanos from "../components/Pages/Contactanos/contactanos";
import Menulateral from "../admin/components/menulateral";
import Admincharlas from '../admin/charlas/charlas'
import InicioAdmin from '../admin/inicio/inicio'
import Cronograma from "../components/Pages/Cronograma/cronograma";
import Conocenos from "../components/Pages/Conocenos/conocenos";


const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar/>}>
        <Route index element={<Inicio />} />
        <Route path="/charla" element={<Charla />}/>
        <Route path="/contactanos" element={<Contactanos />}/>
        <Route path="/conocenos" element={<Conocenos/>}/>
        <Route path="/cronograma" element={<Cronograma />}/>
        
        </Route>

        <Route path="/admin" element={<Menulateral/>}>
          <Route index element={<InicioAdmin/>}/>
          <Route path="/admin/charlas" element={<Admincharlas/>}/>
          
        </Route>        
        </Routes>
    </div>
  );
};

export default App;
