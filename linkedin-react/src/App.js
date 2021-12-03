import './App.css';

function Header({name}){
  return(
    <header>
      <h1>{name}'s Kitchen</h1>
    </header>
  )
}

function Main({adj}){
  return(
    <section>We make the most {adj} food around!</section>
  )
}

function Footer({year}){
  return(
    <footer>
      <p>Copyright {year}</p>
    </footer>
  )
}

function App() {
  return (
    <div className="App">
      <Header name="Cindy"/>
      <Main adj="amazing"/>
      <Footer year={new Date().getFullYear()}/>
    </div>
  );
}

export default App;
