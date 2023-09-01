import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './component/Login';
import Home from './component/home';
import DataTable from './component/DataTable';

function App() {

  return (
    <>

      <div className="App">
        <div className='main menu_open'>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Login />} />
              <Route path="/home" element={<Home />} />
            </Routes>
          </BrowserRouter>
          {/* <DataTable /> */}
        </div >
      </div>

    </>
  );
}

export default App;



