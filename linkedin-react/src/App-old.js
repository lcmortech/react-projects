import './App.css';
import logo from './logo.svg'



function Header({name}){
  return(
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}

function Main({adj, dishes}){
  return(

    <section>
      <p>We make the most {adj} food around!</p>
      <img src={logo} height={200} alt="the react logo"/>
      <ul style={{ listStyle: "none"}}>
      {dishes.map((dish, i) => <li key={i}>{dish}</li>)}
      </ul>
    </section>
  )
}

function Footer({year}){
  return(
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

const dishes = [
  "Lamb Gyro",
  "Spicy Tuna Roll",
  "Bulgogi"
];

const dishObjects = dishes.map((dish, i)=> ({id: i, title: dish}))

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adj="amazing" dishes={dishes}/>
      <Footer year={new Date().getFullYear()}/> 
    </div>
  );
}

export default App;
