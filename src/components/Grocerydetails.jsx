import React, {useState} from "react"
import data from '../data.json'
import CartButton from "./CartButton"
import GroceryItem from "./GroceryItem"


const GroceryDetails = ()=>{
console.log(data)
const [array] = useState([]);
array.push(data)

    return(
        <>
        <h1>Groceries</h1>
        <div className="container">
            
            {/* map through the data and display the cards */}
            <GroceryItem  {...array}/>
            {/* {data.map((e)=>{
              return(
                  <div key={e.id}>
                      <div>
                          {e.discount} <img src={e.imgURL} alt="" />
                      </div>
                      <h3>{e.title}</h3>
                      <div>
                          <p>{e.sellingPrice}</p>
                          <s>{e.mrp}</s>
                      </div>
                      <CartButton/>
                  </div>
              )
            })} */}
         
        </div>
        </>
    )
}
export default GroceryDetails