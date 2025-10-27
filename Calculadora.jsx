import { useState } from 'react'
import Botao from './Botao'

export default function Calculadora() {
    const [resultado, setResultado] = useState(0)   // resultado final
    const [operacao, setOperacao] = useState("+")   // operação atual
    const [valorAtual, setValorAtual] = useState(0) // número clicado pelo usuário

    function calcular() {
        if (operacao === "+") setResultado(resultado + valorAtual)
        if (operacao === "-") setResultado(resultado - valorAtual)
    }

    return (
        <>
            <h3>Resultado: {resultado}</h3>
            <p>Valor selecionado: {valorAtual}</p>

            {/* Botões de números */}
            {[1, 2, 3, 4, 5].map((num) => (
                <Botao key={num} numero={num} onClick={() => setValorAtual(num)} />
            ))}

            <br /><br />

            {/* Escolha de operação */}
            <button onClick={() => setOperacao("+")}>+</button>
            <button onClick={() => setOperacao("-")}>-</button>

            <br /><br />

            {/* Executa cálculo */}
            <button onClick={calcular}>=</button>
        </>
    )
}
