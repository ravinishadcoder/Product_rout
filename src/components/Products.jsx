import React, { useEffect, useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
import Styles from "./Common.module.css"
const Products = () => {
    const [data,setData]=useState([])
    useEffect(()=>{
        fetch("http://localhost:8080/data")
        .then((res)=>res.json())
        .then((d)=>setData(d))
        
    },[])
    
  return (<>
    <div>Products
        {data.map((p)=>(<div className={Styles.main} key={p.id}>
          <div>{p.name}</div>
          <div>Price:{p.price}</div>
          {/* <div>more details</div> */}
          <Link to={`/products/${p.id}`}>More Details</Link>
        </div>))}
    </div>
    <Outlet/>
    </>
  )
}

export default Products