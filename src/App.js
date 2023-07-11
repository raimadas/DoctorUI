import {BrowserRouter, Routes, Route} from "react-router-dom";
import "./App.css";
import AddDoctor from "./Components/AddDoctor";
import DoctorList from "./Components/DoctorList";
import Navbar from "./Components/Navbar";
import UpdateDoctor from "./Components/UpdateDoctor";




function App() {
    return (
        <div>
            <BrowserRouter>
            <Navbar />
            <Routes>
                <Route index element={<DoctorList />} />
                <Route path="/" element={<DoctorList />}></Route>
                <Route path="/doctorList" element={<DoctorList />} />
                <Route path="/addDoctor" element={<AddDoctor />} />
                <Route path="/editDoctor/:doctorId" element={<UpdateDoctor />} />
            </Routes>
            </BrowserRouter>
            
        </div>
    );
  
}

export default App;
