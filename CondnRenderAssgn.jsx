
import { useState } from "react";
function CondnRenderAssgn(){
    // var [arr,serArr]=useState([2,3,4,5,7,12,14,16,15,10])
    // return(
    //     <>
    //         <ul>
    //             {
    //                 arr.filter(data=>data%2==0).map((data)=>{
    //                     return <li>{data}</li>
    //                 })
    //             }
    //         </ul>
    //     </>
    // )

    // var [arr,serArr]=useState([2,3,4,5,7,12,14,16,15,10])
    // return(
    //     <>
    //     <ul>
    //         {
    //             arr.map((data)=>{
    //                 return <li style={data%2==0?{fontStyle:'italic'}:{fontWeight:'bold'}}>{data}</li>
    //             })
    //         }
    //     </ul>
    //     </>
    // )

    // var [arr,serArr]=useState([2,3,4,26,25,7,12,14,49,54,32,16,15,10])
    // return (
    //     <><ul>
    //         {
    //             arr.map((data)=>{
    //                 return data<25?<li>{data}</li>:null;
    //             })
    //         }
    //         </ul>
    //     </>
    // )
    // const student = {
    //     Id: 101,
    //     Name: "Aarav Sharma",
    //     Age: 20,
    //     Gender: "Male",
    //     Email: "aarav.sharma@example.com",
    //     Course: "Computer Science",
    //     Year: "3rd Year"
    // };
    // return(
    //     <>
    //     <style>
    //         {`
    //             img{
    //                 border:2px solid lightgray;
    //                 border-radius:50%
    //             }
    //         `}
    //     </style>
    //     <div style={{height:'300px',width:'300px', border:'2px solid lightgray',margin:'10px',padding:'10px',textAlign:'center'}}>
    //     <img src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?cs=srgb&dl=pexels-italo-melo-881954-2379004.jpg&fm=jpg" alt="" height="100px" width="100px" />
    //     {
    //         Object.entries(student).map(([key,value])=>{
    //             return <h6 >{value}</h6>
    //         })
    //     }
    //     </div>
    //     </>
    // )
    
//     const nonVegPizzas = [
//   {
//     Name: "Chicken Dominator",
//     Toppings: "Tikka, BBQ Chicken",
//     BaseSauce: "Tomato & BBQ",
//     Details: "Chicken Feast"
//   },
//   {
//     Name: "Pepper BBQ Chicken",
//     Toppings: "BBQ Chicken, Capsicum",
//     BaseSauce: "BBQ",
//     Details: "Smoky Chicken"
//   },
//   {
//     Name: "Chicken Sausage",
//     Toppings: "Sausages",
//     BaseSauce: "Tomato",
//     Details: "Sausage Delight"
//   },
//   {
//     Name: "Chicken Tikka",
//     Toppings: "Tikka, Onion",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Chicken"
//   },
//   {
//     Name: "Chicken Dominator",
//     Toppings: "Tikka, BBQ Chicken",
//     BaseSauce: "Tomato & BBQ",
//     Details: "Chicken Feast"
//   },
//   {
//     Name: "Pepper BBQ Chicken",
//     Toppings: "BBQ Chicken, Capsicum",
//     BaseSauce: "BBQ",
//     Details: "Smoky Chicken"
//   },
//   {
//     Name: "Chicken Sausage",
//     Toppings: "Sausages",
//     BaseSauce: "Tomato",
//     Details: "Sausage Delight"
//   },
//   {
//     Name: "Chicken Tikka",
//     Toppings: "Tikka, Onion",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Chicken"
//   },
//   {
//     Name: "Chicken Sausage",
//     Toppings: "Sausages",
//     BaseSauce: "Tomato",
//     Details: "Sausage Delight"
//   },
//   {
//     Name: "Chicken Tikka",
//     Toppings: "Tikka, Onion",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Chicken"
//   }
// ];
// const vegPizzas = [
//   {
//     Name: "Margherita",
//     Toppings: "Cheese",
//     BaseSauce: "Tomato",
//     Details: "Cheesy Classic",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Farmhouse",
//     Toppings: "Onion, Capsicum, Mushroom",
//     BaseSauce: "Tomato",
//     Details: "Veggie Loaded",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Peppy Paneer",
//     Toppings: "Paneer, Capsicum",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Paneer",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Deluxe Veggie",
//     Toppings: "Onion, Capsicum, Corn",
//     BaseSauce: "Tomato",
//     Details: "Premium Veg",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Margherita",
//     Toppings: "Cheese",
//     BaseSauce: "Tomato",
//     Details: "Cheesy Classic",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Farmhouse",
//     Toppings: "Onion, Capsicum, Mushroom",
//     BaseSauce: "Tomato",
//     Details: "Veggie Loaded",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Peppy Paneer",
//     Toppings: "Paneer, Capsicum",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Paneer",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Deluxe Veggie",
//     Toppings: "Onion, Capsicum, Corn",
//     BaseSauce: "Tomato",
//     Details: "Premium Veg",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Peppy Paneer",
//     Toppings: "Paneer, Capsicum",
//     BaseSauce: "Spicy Tomato",
//     Details: "Spicy Paneer",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   },
//   {
//     Name: "Deluxe Veggie",
//     Toppings: "Onion, Capsicum, Corn",
//     BaseSauce: "Tomato",
//     Details: "Premium Veg",
//     image:'https://www.thursdaynightpizza.com/wp-content/uploads/2022/06/veggie-pizza-side-view-out-of-oven-720x480.png'
//   }
// ];
// return(
//     <>
//         <div style={{margin:'10px',backgroundColor:'beige',borderRadius:'10px',padding:'40px'}}>
//             <h1>Veg Pizza</h1>
//             <div style={{ display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'space-evenly'}}>
//             {
//             vegPizzas.map((data)=>{
//                 return (
//                     <div style={{height:'250px',width:'250px',border:'2px solid',borderRadius:'10px', textAlign:'center',padding:'10px',backgroundColor:'lightcoral'}}>
//                         <img src={data.image} alt="" height='100px' width='100px' style={{borderRadius:'10px'}}/>
//                         <ul style={{listStyle:'none',fontSize:'large',fontWeight:'bold'}}>
//                             <li>{data.Name}</li>
//                             <li>{data.Toppings}</li>
//                             <li>{data.BaseSauce}</li>
//                             <li>{data.Details}</li>
//                         </ul>
//                     </div>

//                 )
//             })
//             }
//             </div>
//         </div>

//         <div style={{margin:'10px',backgroundColor:'beige',borderRadius:'10px',padding:'40px'}}>
//             <h1>Non-veg Pizza</h1>
//             <div style={{display:'flex',flexWrap:'wrap',gap:'10px',justifyContent:'space-evenly'}}>
//                 {
//                     nonVegPizzas.map((data)=>{
//                         return (
//                             <div style={{height:'250px',width:'250px',border:'2px solid',borderRadius:'10px', textAlign:'center',padding:'10px',backgroundColor:'lightcoral'}}>
//                                 <img src="https://5.imimg.com/data5/RI/MN/MY-17758356/imperial-recipe-pizza-non-veg-chicken-heavyweight-i10-500x500.png" alt="" height="100px" width="100px" style={{borderRadius:'10px'}}/>
//                                 <ul style={{listStyle:'none',fontSize:'large',fontWeight:'bold'}}>
//                                     <li>{data.Name}</li>
//                                     <li>{data.Toppings}</li>
//                                     <li>{data.BaseSauce}</li>
//                                     <li>{data.Details}</li>
//                                 </ul>
//                             </div>
//                         )
//                     })
//                 }
//             </div>
//         </div>
//     </>
// )

let [arr,setArr]=useState(['bunny','reethu',"JYOTHI","SRINIVAS","LUCKY",'sana'])
return(
    <>
        <ol>
        {
        arr.filter(data=>data===data.toUpperCase()).map((data)=>{
                return <li>{data}</li>
            })
        }
        </ol>
        <ul>
            {
                arr.filter(data=>data===data.toLowerCase()).map((data)=>{
                    return <li>{data}</li>
                })
            }
        </ul>
    </>
)
}
export default CondnRenderAssgn;