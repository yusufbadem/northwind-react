import axios from 'axios'
import React, { useEffect, useState } from 'react'
import "./order.css"

function Orderlist() {


    const [orderlist, setorderlist] = useState([])
    const [loading, setloading] = useState(true)

    useEffect(() => {
        axios.get("https://northwind.vercel.app/api/orders")
        .then(res=>{
            setorderlist(res.data)
            setloading(false)
        })
      
    }, [])
    


  return<>
  <div className="orderlist-container">
    <h1>ORder List: {orderlist.length}</h1>
  <table className="orderlist-table">
        <thead>
            <tr>
                <th>Id</th>
                <th>Name</th>
                <th>UnitPrice</th>
                <th>UnitsInStock</th>
                <th>ORderDate</th>
            </tr>
        </thead>
        <tbody>
            {
              orderlist &&  orderlist.map(item => <tr>
                    <td>{item.id}</td>
                    <td>{item.customerId}</td>
                    <td>{item.employeeId}</td>
                    <td>{item.orderDate}</td>
                    <td>{item.shipName}</td>

                </tr>)
            }
        </tbody>
    </table>
  </div>
  
  </>
}

export default Orderlist