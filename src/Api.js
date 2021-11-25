import { useState } from "react";
import { useEffect } from "react";
import faker from "faker"
import './Api.css';

const App = () => {

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

const Cat = (props) => {
    return (
        <div className='card'>
            <img src={props.pic} className="imgCat rotate" />
            <p>Hi, my name is {faker.name.firstName()}. I love {faker.music.genre()}</p>
            <div className='cardFooter'>£{faker.finance.amount()}<button className='adoptBtn'>Adopt Me</button></div>   
        </div>
    )
}

return (
    <div className='catGrid'>
        {catsInfo.map((cat, index) => {
            return <Cat key={index} pic={cat.url} />
            })}
    </div>
)

}
export default App;