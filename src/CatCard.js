import React from 'react';

function CatCard(props) {
    return ( 
        <div className='catCard'>
            <img src={props.image} className='image'/>
            <h3 className="name">{props.name}</h3>
            <button className="addBtn">+</button>
        </div>
     );
}

export default CatCard;