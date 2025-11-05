import Botao from './Botao'
import { useState } from 'react'
import './index.css' // pra puxar o estilo

export default function Calculadora() {
    let numeros = [-1, 5, 2, 8, -4]
    const [number, setNumber] = useState(0)
    const [texto, setTexto] = useState("")

    function clicar(numero) {
        setNumber(number + numero)
    }

    function valida() {
        if (number > 120)
            setTexto("Isso aí! É maior que 120, parabéns!")
        else if (number === 120)
            setTexto("Eu pedi maior que 120, não igual!")
        else
            setTexto("Isso é menor!")
    }

    return (
        <div style={{ margin: '50px', textAlign: 'center' }}>
            <h4>Incremento / Decremento</h4>

            {numeros.map((valor) => (
                <Botao onClick={() => clicar(valor)} numero={valor} />
            ))}

            <br /><br />
            <h4>{number}</h4>
            <h4>Quero um número maior que 120...</h4>

            <button
                onClick={valida}
                style={{
                    marginTop: '15px',
                    padding: '8px 20px',
                    borderRadius: '8px',
                    backgroundColor: 'lightblue',
                    border: 'none'
                }} 
            >
                Validar
            </button>

            <h4 style={{ marginTop: '20px' }}>{texto}</h4>
        </div>
    )
}
