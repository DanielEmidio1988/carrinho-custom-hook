import {useState} from "react"

function useCounter (){

    const [valor, setValor] = useState(0)
    const maxValor = 2
    const minValor = 0

    const soma = ()=>{
        if(valor < maxValor){
        setValor(valor + 1)
        }else{
            alert(`Numero máximo atingido`)
        }  
    }

    const subtracao = ()=>{
        if(valor > minValor){
        setValor(valor - 1)  
        }else{
            alert(`Numero minimo alcançado`)
        }      
    }

    const resetar = ()=>{
        setValor(0)
    }

    return [valor, soma, subtracao, resetar]
}

export default useCounter