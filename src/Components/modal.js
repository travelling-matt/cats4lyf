import { map } from 'mathjs';
import { useEffect, useState } from 'react';
// import ReactModal from 'react-modal';
import React from 'react';
import Modal from "react-modal"
import App from '../App';


///// isOpen={showModal}
///////////// pass in catInfo and prices
const Basket = ({handleCloseModal}) => {
    ///////////////////////
    const [basket, setBasket] = useState([{name: "john", price: 12}, {name: "mary", price: 13}])
    const [total, setTotal] = useState("")
    /////////////////////////////
    const removeItemHandler = (index) => {
        const storedBasket = [...basket]
        storedBasket.splice(index, 1)
        setBasket(storedBasket)
    }   
    
    return (
        <div>
            {basket.map((item, index) => {
                
                return <BasketItem item={item} key={index} total={total} setTotal={setTotal} func={() => removeItemHandler(index)}/>
            })} 
           
            <button onClick={handleCloseModal}>Close basket </button>
        </div>
    )

}

const BasketItem = (props, index ) => {
    const { name,  price } = props.item

    return (
        <div>
            {/* <img src={img} alt="cat to be purchased" /> */}
            <div>
                <p>{name}</p>
                <p>{price}</p>
            </div>
            <button onClick={() => props.func()}>Remove item</button>
        </div>
    )
}

export default Basket