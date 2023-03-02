import { Route, Routes } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';
import AboutRoute from './Routes/AboutRoute';
import MenuRoute from './Routes/MenuRoute';


function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      <Navbar />
      <Routes>
        <Route path="/" element={<AboutRoute />}/>
        <Route path="/MenuRoute" element={<MenuRoute />}/>
      </Routes>
    </div>
  );
}

export default App;
