import { useState } from "react";
import { useEffect } from "react";
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
        <div>
            <p><img src={props.pic} className="rotate" /></p>
            <p>Breed: {props.breed}</p>
        </div>
    )
}

return (
    <div>
        {catsInfo.map((cat, index) => {
            return <Cat key={index} pic={cat.url} breed={cat.breed} />
            })}
    </div>
)

}
export default App;