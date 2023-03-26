import Navbar from "../components/Navbar";
import { Routes, Route } from "react-router-dom";

import Inicio from "../components/Pages/Inicio";
import Charla from "../components/Pages/Charla/Charla";
import Contactanos from "../components/Pages/Contactanos/contactanos";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Navbar />}>
        <Route index element={<Inicio />} />
        <Route path="/charla" element={<Charla />}/>
        <Route path="/contactanos" element={<Contactanos />}/>
          
         
          {/* <Route path="*" element={<Default/>}/> */}
        </Route>
      </Routes>
    </div>
  );
};

export default App;
