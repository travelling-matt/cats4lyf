import { map } from 'mathjs';
import { useEffect, useState } from 'react';
// import ReactModal from 'react-modal';
import React from 'react';
import Modal from "react-modal"
import App from '../App';

const _ = require("lodash")

///// isOpen={showModal}
///////////// pass in catInfo and prices
const Basket = ({handleCloseModal, catsInfo, basketAdd, setBasketAdd, total, setTotal}) => {
    ///////////////////////
    // const [basket, setBasket] = useState([{name: "john", price: 12}, {name: "mary", price: 13}])

   
    /////////////////////////////
    const removeItemHandler = (index) => {
        const storedBasket = [...basketAdd]
        storedBasket.splice(index, 1)
        setBasketAdd(storedBasket)
        const storedTotal = [...total]
        storedTotal.splice(index,1)
        setTotal(storedTotal)
    }   
    const totalSum = _.sum(total)

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
    // const { name,  price } = props.item

    return (
        <div>
            {/* <img src={img} alt="cat to be purchased" /> */}
            <div>
                <div><img src={props.item.url} alt="" /></div>
                <p>{props.item.name}</p>
                <p>£{props.item.amount}</p>
                
                {/* <p>{name}</p>
                <p>{price}</p> */}
            </div>
            <button onClick={() => props.func()}>Remove item</button>
        </div>
    )
}

export default Basket