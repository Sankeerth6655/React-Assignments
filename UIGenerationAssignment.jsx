import { useState } from "react";

function UIGenerationAssignment(){
    // var [arr,setArr]=useState(['https://media.istockphoto.com/id/857403148/photo/less-is-more-text-on-paper-word-less-is-more-on-torn-paper-concept-image.jpg?s=612x612&w=0&k=20&c=T0K5R6LYZlCoUzs3vEhTcI7Jb1ozAFTHwI3Uq8cYy_I=','https://media.istockphoto.com/id/636055502/photo/more-and-less-balance.jpg?s=612x612&w=0&k=20&c=howtKdt79ppHR6OZe9sBeyCS7rAcYR96--3XJ26l3Vc=','https://media.istockphoto.com/id/542689238/photo/let-it-go.jpg?s=612x612&w=0&k=20&c=P0O3hLJlviegVehnKJm6mwr-DzYBLDQq4-S7GH-b1vQ='])
    // return (
    //     <div style={{marginTop:'10px',marginLeft:'10px'}}>
    //        { arr.map((i)=>{
    //             return <img src={i} alt="" style={{height:'200px',width:'300px'}}/>
    //         })
    //     }
    //     </div>
    // );

    let [products,setProducts]=useState([
  {
    title: "Apple Airpods Max",
    price: 89999,
    description: "Bluetooth over-ear headphones with noise cancellation and 20hr battery life.",
    image: "https://www.apple.com/v/airpods-max/i/images/overview/product-stories/hifi-sound/modal/audio_bc_microphone__c4kgd4pga3cm_large.png"
  },
  {
    title: "Apple watch",
    price: 83499,
    description: "Water-resistant smartwatch with fitness tracking and call notifications.",
    image: "https://rukminim2.flixcart.com/image/704/844/xif0q/smartwatch/n/a/z/-original-imah4jm98qgzfymk.jpeg?q=90&crop=false"
  },
  {
    title: "Apple Mouse",
    price: 21299,
    description: "Ergonomic gaming mouse with RGB lights and 6 programmable buttons.",
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Magic_Mouse.jpg"
  },
  {
    title: "Mac Book",
    price: 124899,
    description: "Durable and lightweight backpack with multiple compartments for laptops and gadgets.",
    image: "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/macbook-air-og-202503?wid=1200&hei=630&fmt=jpeg&qlt=95&.v=1739216814915"
  },
  {
    title: "Apple Keyboard",
    price: 21599,
    description: "Slim wireless keyboard with quiet keys and rechargeable battery.",
    image: "https://upload.wikimedia.org/wikipedia/commons/9/96/Apple-wireless-keyboard-aluminum-2007.jpg"
  }
])

return (
    <>
    <style>
        {`
          body{
            margin:10px
          }
          table, th, td {
            border: 1px solid black;
            border-collapse: collapse;
            padding: 8px;
          }
        `}
      </style>
        <table>
            <thead>
                <tr>
                <th>Title</th>
                <th>Price</th>
                <th>Description</th>
                <th>Image</th>
              </tr>
            </thead>
            <tbody>
                
              {
                  products.map((data)=>{
                      return (
                          <tr>
                              <td>{data.title}</td>
                              <td>{data.price}</td>
                              <td>{data.description}</td>
                              <td><img src={data.image} alt="" style={{height:'150px',width:'150px'}}/></td>
                          </tr>
                      )
                  })
              }
                
            </tbody>
        </table>
    </>
);
}
export default UIGenerationAssignment;