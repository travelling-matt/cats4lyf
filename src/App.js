import { useState } from "react";
import { useEffect } from "react";
import faker from "faker"
import './App.css';
import Modal from "react-modal"
import Basket from "./Components/modal";
import CatImg from "./cats4lyf.png"


const App = () => {

  const [catsInfo, setCatsInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    {
      error: false,
      message: ""
    }
  );
  const [showModal, setShowModal] = useState(false)
  const [basketAdd, setBasketAdd] = useState([])
  const [catName, setCatName] = useState([])
  const [catPrice, setCatPrice] = useState([])
  const [total, setTotal] = useState("")
  const [genre, setGenre] = useState([])

  const [count, setCount] = useState(0)

  const handler = async () => {
    try {
      setLoading(true);
      const response = await fetch("https://api.thecatapi.com/v1/images/search?limit=12")
      console.log("http response", response)
      if (response.status !== 200) {
        throw new Error("oops http error");
      }
      const data = await response.json();
      console.log("API info all", data);
      console.log("API info array 0", data[0]);

      console.log(catsInfo.length);
      setCatsInfo(data);

      setLoading(false);
    } catch (err) {
      setError({ error: true, message: error.message })
    }
  };

  console.log(basketAdd);
  console.log(total);

  const addBasketHandler = (name, index, url, amount) => {
    const storedBasket = [...basketAdd]
    storedBasket.push({ name: name, url: url, amount: amount })
    setBasketAdd(storedBasket)

    const storedTotal = [...total]
    storedTotal.push(parseFloat(amount))
    setTotal(storedTotal)

    setCount(count + 1)
  }

  const fakeNameHandler = () => {
    const storedCatNames = [...catName]
    const storedCatPrice = [...catPrice]
    const storedGenre = [...genre]

    for (let i = 0; i < 12; i++) {
      storedCatNames.push(faker.name.firstName())
      setCatName(storedCatNames)

      storedCatPrice.push(faker.finance.amount())
      setCatPrice(storedCatPrice)

      storedGenre.push(faker.music.genre())
      setGenre(storedGenre)
    }
  }

  useEffect(() => {
    if (catsInfo.length === 0) {
      handler();
      console.log("use effect ran");
    }
    fakeNameHandler()
  }, []);

  if (!catsInfo) {
    return <p>loading...</p>
  }

  if (error.error) {
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
      <div data-testId="catDiv" className="card">
        <img src={props.pic} className="imgCat rotate" alt="cat" />
        <p>Hi, my name is {props.catName}. I love {props.music} music.</p>
        <div className="cardFooter">
          <p>£{props.amount}</p>

          <button className="adoptBtn" onClick={() => addBasketHandler(props.catName, props.index, props.pic, props.amount)}>please ADOPT ME</button>
        </div>
      </div>
    )
  }

  return (
    <div >
      <div className="header">
        <Modal isOpen={showModal} >
          <Basket count={count} setCount={setCount} handleCloseModal={handleCloseModal} catsInfo={catsInfo} catName={catName} catPrice={catPrice} basketAdd={basketAdd} setBasketAdd={setBasketAdd} total={total} setTotal={setTotal} />
        </Modal>
        <img className="cats5lyf" src={CatImg} />
        <div className="countBtn">
          <p>In basket: {count}</p>
          
          <button onClick={handleOpenModal} >Open Basket</button>
          </div>


        
      </div>


      <div className="catGrid">
        {catsInfo.map((cat, index) => {
          return <Cat key={index} pic={cat.url} index={index} catName={catName[index]} music={genre[index]} amount={catPrice[index]} />
        })}
      </div>
    </div>
  )

}
export default App;

