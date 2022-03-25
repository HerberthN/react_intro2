import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
    return <div>Meu primeiro componente REACTJS</div>
    //return <img src="logo192.png"></img>
    //return <p>&#128512;</p>
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)