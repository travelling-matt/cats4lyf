import react from "react";




const Home = () => {
  return <Cats />
}
const Cats = (props) => {
  return (
    <div className="cats">
      <img src="" alt="" />
      <h1>{props.name}</h1>
      <button onClick=>Add</button>
    </div>
  )
}