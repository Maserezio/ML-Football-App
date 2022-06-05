import "./App.css";
import Main from "./Pages/Main"
import MatchList from "./Pages/MatchList"
import {BrowserRouter, Route, Routes} from 'react-router-dom'
 

function App() {
  return( 
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="England" element={<MatchList league = {"PL"} />} />
        <Route path="Germany" element={<MatchList league = {"BL1"} />} />
        <Route path="France"  element={<MatchList league = {"FL1"} />} />
        <Route path="Spain"   element={<MatchList league = {"PD"} />} />
        <Route path="Italy"   element={<MatchList league = {"SA"} />} />        
      </Routes> 
    </BrowserRouter>
  ) 
}

export default App;
