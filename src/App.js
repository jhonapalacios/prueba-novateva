import logo from './images/mobile-logo.png';
import {useState , useEffect} from 'react'
function App() {
  
  const [data , setData] = useState(null);
  const [url, setUrl ] = useState("https://swapi.dev/api/people/")

  useEffect(()=>{
    fetch(url)
    .then((response)=> response.json())
    .then((data)=>{
      setData(data.results)
    })
  },[])

    const handleChange = (e) =>{
      console.log(e.target.value)
    }
    const filtrarBusqueda = ()=>{
      console.log("click")
    }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <section>
        <div className="container">
          <div className='search'>
            <input 
              type="text"
              placeholder="ingresa tu búsqueda"
              onChange={handleChange}
            ></input>
            <button onClick={filtrarBusqueda}>Buscar</button>
          </div>
          <ul className='cards'>
            {data?.map((item,index)=>(
              <li className='cardItem' key={index}>
                <p><strong>Name: </strong> {item.name}</p>
                <p><strong>Gender: </strong>{item.gender}</p>
                <p><strong>Hair Color: </strong>{item.hair_color}</p>
                <p><strong>Eye Color: </strong>{item.eye_color}</p>
                <p><strong>Films: </strong>
                </p>
              </li>
            ))}
            
          </ul>
        </div>
      </section>
    </div>
  );
}

export default App;
