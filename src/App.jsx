import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios';
import Card from './components/Card';

function App() {
  const [actor, setActor] = useState([]);
  const [mainActor, setMainActor] = useState([])
  const [filterName, setFilterName] = useState("")
  const [active, setActive] = useState(false)

  useEffect(() => {
    axios.get("https://lanciweb.github.io/demo/api/actresses/").then((resp) => {
      const actress = resp.data; // al prossimo render aggiorna actor (actor = [])

      axios.get("https://lanciweb.github.io/demo/api/actors/").then((resp) => {
        const actors = resp.data;

        setActor([...actress, ...actors])
        setMainActor([...actress, ...actors])
        setActive(true);
      })
    })
  }, [])

  useEffect(() => {
    const copyArray = actor.filter((item) => item.name.toLowerCase().includes(filterName.toLowerCase()));
    setMainActor(copyArray);
  }, [filterName])


  return (
    <>
      <h1>BEST ACTOR 2k25</h1>

      {active ? (  
      <>
        <div className="filter">
          <label htmlFor="">Filtra per nome: </label>
          <input type="text" value={filterName} onChange={(event) => setFilterName(event.target.value)} />
        </div>
        <div className='grid'>
          {mainActor.map((actor, index) => (
            <Card key={index}
              actor={actor} />
          ))}
        </div>
      </>
      ) : (
        <h2 className='loading'>Loading</h2>
      )
      }

    </>
  )
}

export default App
