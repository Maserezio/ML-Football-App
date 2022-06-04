import "./App.css";
import Main from "./Pages/Main"
import Eng from "./Pages/England"
import Ger from "./Pages/Germany"
import Fra from "./Pages/France"
import Spa from "./Pages/Spain"
import Ita from "./Pages/Italy"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
 

function App() {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="England" element={<Eng />} />
        <Route path="Germany" element={<Ger />} />
        <Route path="France" element={<Fra />} />
        <Route path="Spain" element={<Spa />} />
        <Route path="Italy" element={<Ita />} />        
      </Routes> 
    </BrowserRouter>
  ) 
}

export default App;
