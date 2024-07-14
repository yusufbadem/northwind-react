import React from 'react';
import { useEffect,useState} from "react";
import "./product.css"
import axios from 'axios';


function Productlist() {

    const [productlist, setproducts] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(()=>{
        getProducts();
    },[])


    const getProducts= ()=>{
        axios.get("https://northwind.vercel.app/api/products")
        .then(res => {
            setproducts(res.data)
            setloading(false)
        })
    }

    
    const deleteProduct= (id)=>{
        var confirm=window.confirm("Are You Sure")

        if(confirm){
            setloading(true)
            axios.delete("https://northwind.vercel.app/api/products/"+id)
            .then(res=>{
                getProducts();
            })
        }
    }

  return <>
  
    {
        loading == true ? <h1>loading ...</h1> :<>
         <div className="productlist-container">
            <h1>product list :{productlist.length}</h1>
            <table className="productlist-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UnitPrice</th>
                <th>UnitsInStock</th>
                <th>Delete</th>
            </tr>
        </thead>
        <tbody>
            {
              productlist &&  productlist.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.name}</td>
                    <td>{item.unitPrice}</td>
                    <td>{item.unitsInStock}</td>
                    <td>
                    <button style={{ width: 100, height: 50, backgroundColor: 'red', color: 'white', padding: 0, border: 'none' }} onClick={() => deleteProduct(item.id)}>
                        Delete Order
                    </button>
                    </td>
                </tr>)
            }
        </tbody>
    </table>
  </div>
        
     </>
    }
  </>
}

export default Productlist