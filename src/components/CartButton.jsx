import {useState} from 'react';
// keep the add to cart component here
const CartButton = () => {
    //manage state of the count 
    const [count,setadd] =  useState(0)
    const handleplus = () => {
      setadd(count+1)
    }
    const handleminus = () => {
      setadd(count-1)
    }

  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}
  <div>
  {count ==0? <button onClick={handleplus}>Add to Cart</button>: <div><button onClick={handleminus}>-</button><p className="count-item">{count}</p><button  onClick={handleplus}>+</button></div>  }
     
      
      
  </div>
  </>;
};
export default CartButton
{/* <p className="count-item">{count}</p> */}