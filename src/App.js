import { useEffect, useState } from 'react'
import axios from 'axios'
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

let chat = [
  {
    id: 1,
    avatar: 'https://...',
    username: 'simonhoyos',
    content: 'Bienvinid@s',
  },
  {
    id: 2,
    avatar: 'https://...',
    username: 'alejonanez',
    content: 'hola a todos y todas',
  },
]

function List() {
  let elements = []

  useEffect(() => {
    axios({
      method: 'GET',
      baseURL: 'https://swapi.dev/api',
      url: '/people'
    })
      .then(response => {
        console.log(response.data)
      })
  })

  return chat.map(( message, index ) => {
    return (
      <article key={message.id}>
        <p>{message.avatar}</p>
        <h2>{message.username}</h2>
        <p>{message.content}</p>
      </article>
    )
  })
}

function App() {
  return (
    <div className="App">
      <Container>
        <Body>
          <Greet name={33} age={30}/>
          <List />
        </Body>
      </Container>
    </div>
  );
}

export default App;
