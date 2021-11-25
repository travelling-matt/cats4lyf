
// import ReactModal from 'react-modal';
import React from 'react';


const _ = require("lodash")

const Basket = ({handleCloseModal, catsInfo, basketAdd, setBasketAdd, total, setTotal, count, setCount}) => {

    const removeItemHandler = (index) => {
        const storedBasket = [...basketAdd]
        storedBasket.splice(index, 1)
        setBasketAdd(storedBasket)
        const storedTotal = [...total]
        storedTotal.splice(index,1)
        setTotal(storedTotal)
        setCount(count-1)
    }   
    const totalSum = _.sum(total).toFixed(2)

    return (
        <div>
            {basketAdd.map((item, index) => {
                
                return <BasketItem item={item} key={index} total={total}  img={catsInfo.url} func={() => removeItemHandler(index)}/>
            })} 
           <p>Total: £{totalSum}</p>
            <button onClick={handleCloseModal}>Close basket </button>
        </div>
    )
}

const BasketItem = (props, index ) => {
    return (
        <div>  
            <div>
                <div><img src={props.item.url} alt="" /></div>
                <p>{props.item.name}</p>
                <p>£{props.item.amount}</p>          
            </div>
            <button onClick={() => props.func()}>Remove item</button>
        </div>
    )
}

export default Basket