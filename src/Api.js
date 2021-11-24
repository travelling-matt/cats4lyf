import { useState } from "react";
import { useEffect } from "react";
import faker from "faker"
import './Api.css';

const App = () => {

  const [catsInfo, setCatsInfo] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(
    {
      error:false,
      message: ""
    }
  );
//   const [catAndName, setCatAndName] = useState(
//       {
//           url: "",
//           name: "",
//           genre: "",
//           price: ""
//       }
//   );
  const [basketAdd, setBasketAdd] = useState("")

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

useEffect(() => {
    handler();
},[]);

if(!catsInfo){
    return <p>loading...</p>
}

if(error.error){
    return <h1>{error.message}</h1>
}

const Cat = (props) => {
    return (
        <div>
            <p><img src={props.pic} className="imgCat rotate" /></p>
            <p>Hi, my name is {props.name}. I love {props.music}</p>
            <p>£{props.amount}</p>
            <p>my name is: {props.name}</p>
            setCatPrices.push (name, index, faker.finance.amount)
            <button onClick={() => setBasketAdd(props.name, props.music, props.amount)}>please ADOPT ME</button>
        </div>
    )
}

return (
    <div>
        {catsInfo.map((cat, index) => {
            return <Cat key={index} pic={cat.url} name={faker.name.firstName()} music={faker.music.genre()} amount={faker.finance.amount()}/>
            })}
    </div>
)

}
export default App;