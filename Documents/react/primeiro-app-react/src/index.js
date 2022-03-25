import React from 'react'
import ReactDOM from 'react-dom'
import './styles.css'

const App = () => {
    //return <div>Meu primeiro componente REACTJS</div>
    //return <img src="logo192.png"></img>
    //return <p>&#128512;</p>
    const estilosBotao = {
        marginTop: 12, 
        paddingTop: 8,
        paddingBottom: 8, 
        backgroundColor: 'blueviolet',
        color: 'white',
        border: 'none',
        width: '100%',
        borderRadius: 8
    }
    const nome = 'NOME'
    const texto = () => "ENVIAR"
    return( 
        <div style={{margin: "auto", width: 768, backgroundColor: "#EEE", padding: 12, borderRadius: 8}}>
            <label className="rotulo" htmlFor="nome" style={{display: "block", marginBottom: 4}}>{nome}</label>
            <input type="text" id="nome" style={{paddingTop: 8, paddingBottom: 8,
                 borderStyle: "hidden", width: "100%", borderRadius: 8, outline: "none"}}></input>   
            <button style={estilosBotao}>{texto()}</button>        
        </div>
    )
}

ReactDOM.render(
    <App />,
    document.querySelector('#root') 
)