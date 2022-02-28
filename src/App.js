import "./App.css";
import Home from "./screens/Home";
import PanelAdmin from './screens/PanelAdmin'


import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
     <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="admin" element={<PanelAdmin />}></Route>
      </Routes>
    </div>
  );
}

export default App;
