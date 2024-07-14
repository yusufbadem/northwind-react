import axios from 'axios'
import React, { useState } from 'react'

function AddSuppliers() {


        const [companyname, setCompanyname] = useState("")
        const [contactname, setContactname] = useState("")
        const [contacttitle, setTitlename] = useState("")
        const [contactcity, setContactcity] = useState("")



        const add = ()=>{
        axios.post("https://northwind.vercel.app/api/suppliers",
        {
            companyname:companyname,
            contactname:contactname,
            contacttitle:contacttitle,
            contactcity:contactcity
        })
            .then(res=>{
                console.log(companyname,contacttitle,contactname,contactcity)
                alert("Suppliers Başarıyla eklendi")
            })
        }


  return<>
        <div style={{margin:5}}>
            <label>Company Name</label>
            <input type='text' onChange={(e) => setCompanyname(e.target.value)} />
        </div>

        <div style={{margin:5}}>
            <label>Contact Name</label>
            <input type='text' onChange={(e) => setContactname(e.target.value)} />
        </div>

        <div style={{margin:5}}>
            <label>Contatc Title</label>
            <input type='text' onChange={(e) => setTitlename(e.target.value)} />
        </div>

        <div style={{margin:5}}>
            <label>City</label>
            <input type='text' onChange={(e) => setContactcity(e.target.value)} />
        </div>

        <div style={{margin:5}}>
            <button onClick={add}>Add</button>
        </div>
  </>
}

export default AddSuppliers