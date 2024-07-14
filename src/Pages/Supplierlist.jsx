import React, { useEffect, useState } from 'react'

function Supplierlist() {

const [suppliers, setsuppliers] = useState([])

useEffect(()=>{

    fetch("https://northwind.vercel.app/api/suppliers")
    .then(res => res.json())
    .then(data => setsuppliers(data))
},[])

  return <>
  
  <div className="productlist-container">
    <h1>product list :{suppliers.length}</h1>
  <table className="productlist-table">
        <thead>
            <tr>
                <th>Company Name</th>
                <th>Contact Name</th>
                <th>Contatct Title</th>
                <th>City</th>
               
            </tr>
        </thead>
        <tbody>
            {
              suppliers &&  suppliers.map(item => <tr>
                    <td>{item.companyName}</td>
                    <td>{item.contactName}</td>
                    <td>{item.contactTitle}</td>
                    <td>{item.address?.city}</td>

                </tr>)
            }
        </tbody>
    </table>
  </div>
  
  </>
}

export default Supplierlist