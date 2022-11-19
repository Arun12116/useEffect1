import React, { useEffect, useState } from 'react'
import { Food } from '../Utiles'
import Card from './Card';

const Main = () => {
  const [data, setData] = useState([]);
  const [serach,setSearch]=useState("");
  const[query,setQuery]=useState("chicken");
  // console.log(data);

const changeHandler=(e)=>{

  setSearch(e.target.value);
  // console.log(serach);
}

 const clickHandler=(e)=>{
  e.preventDefault();
  setQuery(serach)

 }

  useEffect(_ => {
    (async _ => {
      const response = await Food.get(`?q=${query}`);
      //  console.log(response.data.hits);
      setData(response.data.hits)
    })()
  }, [query])


  return (

    <>

      <div className="main">
        <div className="conatainer">
          <h1>Search your favourite Food</h1>
          <div className="serach">
            <input type="text"  className='inpute' value={serach} onChange={changeHandler} />
            <div className="btn">
              <button onClick={clickHandler}>Search</button>

            </div>

          </div>

        </div>
<div className="cards">
{
          data.map((items,key) => {
            return (
              <div>
                <Card  key={key} image={items.recipe.image}  lable={items.recipe.label} calories={items.recipe.calories} meal={items.recipe.mealType}/>

              </div>
            )
          })
        }





      </div>
</div>
       
    </>



  )
}

export default Main