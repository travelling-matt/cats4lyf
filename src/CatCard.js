import React from 'react';

function CatCard(props) {
    return ( 
        <div className='catCard'>
            <img src={props.pic} className='image'/>
            <p className='info'>Hi, my name is {faker.name.firstName()}</p>
            <p>£{faker.finance.amount()}</p>
            <button className="addBtn" onClick={handler}>+</button>
        </div>
     );
}

export default CatCard;