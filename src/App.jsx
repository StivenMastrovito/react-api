import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [actor, setActor] = useState([]);

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      const actress = resp.data; // al prossimo render aggiorna actor (actor = [])
      
      axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
        const actors = resp.data;
       
        setActor([...actress, ...actors])
        console.log([...actress, ...actors]);
        
      })
    })
  }, [])

  const str = {
    name: "Stiven",
    age: 89
  }
  

  return (


    <>
      <h1>BEST ACTOR 2k25</h1>
      <div className='grid'>
        {actor.map((actor, index) => (
          <Card key={index}
            actor={actor} />
        ))}
      </div>
    </>
  )
}

export default App
// "id": 1,
// 		"name": "Meryl Streep",
// 		"birth_year": 1949,
// 		"nationality": "American",
// 		"most_famous_movies": ["The Devil Wears Prada", "Sophie's Choice", "Kramer vs. Kramer"],
// 		"awards": "3 Academy Awards, 9 Golden Globe Awards",
// 		"biography": "Meryl Streep is considered one of the greatest actresses of her generation and has received numerous accolades for her versatile performances.",
// 		"image": "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Meryl_Streep_December_2018.jpg/220px-Meryl_Streep_December_2018.jpg"
// 	},