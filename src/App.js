import logo from './logo.svg';
import './App.css';
import { Link, Route, Routes } from "react-router-dom"
import Productlist from './Pages/Productlist';
import Orderlist from './Pages/Orderlist';
import Supplierlist from './Pages/Supplierlist';
import AddSuppliers from './Pages/AddSuppliers';


function App() {
  return <>
   <ul style={{display:"flex" ,justifyContent:"space-evenly"}}>
    <Link to='/productlist'>Product List</Link>
    <Link to='/orderlist'>Order List</Link>
    <Link to='/supplierlist'>Supplier List</Link>
    <Link to='/addsuppliers'>Add Supplier</Link>

    
  </ul>
  

  <Routes>
  <Route path="/productlist" element={<Productlist/>} />
  <Route path="/orderlist" element={<Orderlist/>} />
  <Route path="/supplierlist" element={<Supplierlist/>} />
  <Route path="/addsuppliers" element={<AddSuppliers/>} />
  
  </Routes>
  </>
}

export default App;
