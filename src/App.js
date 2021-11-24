import React from "react";
import Modal from "react-modal"
import { useState } from "react";
import Basket from "./Components/modal";



// Modal.setAppElement("App")

const App = () => {
  const [showModal, setShowModal] = useState(false)
  const handleOpenModal = () => {
    setShowModal(true)
}
const handleCloseModal = () => {
  setShowModal(false)
}

  return (
    <div>
    <Modal isOpen={showModal} >
    <Basket handleCloseModal={handleCloseModal}/>
    </Modal>
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