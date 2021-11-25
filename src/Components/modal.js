
// import ReactModal from 'react-modal';
import React from 'react';


const _ = require("lodash")

const Basket = ({ handleCloseModal, catsInfo, basketAdd, setBasketAdd, total, setTotal, count, setCount }) => {

    const removeItemHandler = (index) => {
        const storedBasket = [...basketAdd]
        storedBasket.splice(index, 1)
        setBasketAdd(storedBasket)
        const storedTotal = [...total]
        storedTotal.splice(index, 1)
        setTotal(storedTotal)
        setCount(count - 1)
    }
    const totalSum = _.sum(total).toFixed(2)

    return (
        <div className="catGrid">
            {basketAdd.map((item, index) => {

                return <BasketItem item={item} key={index} total={total} img={catsInfo.url} func={() => removeItemHandler(index)} />
            })}
            <div className="checkout">
                <p>Total: £{totalSum}</p>
                <button className="adoptBtn" onClick={handleCloseModal}>Close basket </button>
            </div>
        </div>
    )
}

const BasketItem = (props, index) => {
    return (
        <div>
            <div className="card">
                <img
                    className="imgCat" src={props.item.url} alt="" />
                <p>{props.item.name}</p>
                <div className="cardFooter">
                    <p>£{props.item.amount}</p>

                    <button className="adoptBtn" onClick={() => props.func()}>Remove item</button>
                </div>
            </div>
        </div>
    )
}

export default Basket