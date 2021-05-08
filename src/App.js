import './App.css';

/**
 *
 * @param {string} name - el nombre
 * @param age
 * @returns {JSX.Element}
 * @constructor
 */
function Greet({name, age}) {
  if (!age) {
    return <p>Hola {name.map()}</p>
  }

  return <p>Hola {name} tienes {age} años</p>;
}


function Container({children}) {
  return (
    <div>
      <h1>I'm your navigation!</h1>
      {children}
      <h1>I'm your footer :)!</h1>
    </div>
  )
}

function Body({children}) {
  return (
    <div>
      <p>lorem lorem lorem ipsum bla bla</p>
      <p>lorem lorem lorem ipsum bla bla</p>
      <p>lorem lorem lorem ipsum bla bla</p>
      {children}
    </div>
  )
}

function App() {
  return (
    <div className="App">
      <Container>
        <Body>
          <Greet name={33} age={30}/>
        </Body>
      </Container>
    </div>
  );
}

export default App;
