import React from "react";
import Modal from "react-modal"
import { useState } from "react";
import Basket from "./Components/modal";
import { useEffect } from "react";
// import faker from "faker"


// Modal.setAppElement("App")

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const [catsInfo, setCatsInfo] = useState("");

  const handler = async () => {
      
    const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12") 
    console.log("http response", response)
    const data = await response.json();
    console.log("API info all", data);
    console.log("API info array 0", data[0]);
    setCatsInfo(data);
    console.log(catsInfo);

};

useEffect(() => {
handler();
},[]);

if(!catsInfo){
    return <p>loading...</p>
}
//////////////////////////////////

  const handleOpenModal = () => {
    setShowModal(true)
}
const handleCloseModal = () => {
  setShowModal(false)
}

/////////////////////////////////////
  return (
    <div>
 {/* {////////////////////////////////////////////////////////}  }    ?  */}

    <Modal isOpen={showModal} >
    <Basket handleCloseModal={handleCloseModal} catsInfo={catsInfo}/>
    </Modal>
    
{/* ///////////////////////////////////////////////// */}

    <button onClick={handleOpenModal} >Open</button>
    </div>
  )
}


// const Home = () => {
//   return <Cats />
// }
// const Cats = (props) => {
//   return (
//     <div className="cats">
//       <img src="" alt="" />
//       <h1>{props.name}</h1>
//       <button onClick=>Add</button>
//     </div>
//   )
// }

export default App