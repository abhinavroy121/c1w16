// reusable card component
import CartButton from "./CartButton"
const GroceryItem = (props) => {
  return <>
    {props[0].map((e)=>{
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
            })}
  </>;
};
export default GroceryItem;


