
   
import { useState } from "react";
import { useEffect } from "react";
import faker from "faker"
// import './Api.css';
import Modal from "react-modal"
import Basket from "./Components/modal";


const App = () => {

  const [catsInfo, setCatsInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    {
      error:false,
      message: ""
    }
  );
  const [showModal, setShowModal] = useState(false)

//   const [catAndName, setCatAndName] = useState(
//       {
//           url: "",
//           name: "",
//           genre: "",
//           price: ""
//       }
//   );
  const [basketAdd, setBasketAdd] = useState([])
    const [catName, setCatName] = useState([])


  const handler = async () => {
    try {
        setLoading(true);
        const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12") 
        console.log("http response", response)
        if(response.status !== 200){
            throw new Error("oops http error");
        }
        const data = await response.json();
        console.log("API info all", data);
        console.log("API info array 0", data[0]);
        
        
        setCatsInfo(data);

        console.log(catsInfo);
        setLoading(false);
    } catch(err) {
    setError({ error:true, message: error.message})
    }
};
console.log(basketAdd)
console.log(catsInfo);

  const addBasketHandler = (name, index) => {
    const storedBasket= [...basketAdd]
    storedBasket.push(name)
    setBasketAdd(storedBasket)
    ;
  }
const fakeNameHandler = () => {
  const storedCatNames = [...catName]

  for (let i = 0; i < catsInfo.length; i++){
    storedCatNames.push(faker.name.firstName())
  setCatName(storedCatNames)
  console.log(catName);}

  
  
}
useEffect(() => {
    handler();
    console.log("use effect ran");
    fakeNameHandler()
},[]);

if(!catsInfo){
    return <p>loading...</p>
}

if(error.error){
    return <h1>{error.message}</h1>
}

const handleOpenModal = () => {
  setShowModal(true)
}
const handleCloseModal = () => {
setShowModal(false)
}



const Cat = (props) => {
    return (
        <div>
            <p><img src={props.pic} className="imgCat rotate" alt="cat"/></p>
            <p>Hi, my name is {props.catName}. I love {props.music}</p>
            <p>£{props.amount}</p>
            <p>my name is: {props.catName}</p>
            setCatPrices.push (name, index, faker.finance.amount)
            <button onClick={() => addBasketHandler(props.catName, props.index)}>please ADOPT ME</button>
        </div>
    )
}

return (
    <div>
        <div>
        <Modal isOpen={showModal} >
    <Basket handleCloseModal={handleCloseModal} catsInfo={catsInfo}/>
    </Modal>
    
{/* ///////////////////////////////////////////////// */}

    <button onClick={handleOpenModal} >Open</button>
        </div>
        {catsInfo.map((cat, index) => {
            
            return <Cat key={index} pic={cat.url} index={index}  catName={catName[index]} music={faker.music.genre()} amount={faker.finance.amount()}/>
            })}

    </div>
)

}
export default App;

