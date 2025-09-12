import { useState } from "react"
import { useEffect } from "react"
function ApiCalls(){
    let [products,setProducts]=useState([])
    
     useEffect(()=>{
        fetch("https://dummyjson.com/products")
    .then(res => res.json())
    .then(data => {
        setProducts(data.products)
    })
    },[])
    
    return (
        <>
            <ul>
                {
                    products.map((data)=>{
                        return <li>{data.title}</li>
                    })
                }
            </ul>
        </>
    )
}
export default ApiCalls;