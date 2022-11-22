export const Item = (props) =>{


    return(
        <>
        <div><p>Quantidade: {props.quantidade}</p><button onClick={props.soma}>+</button><button onClick={props.resetar}>Restaurar</button><button onClick={props.subtracao}>-</button></div>
        </>
    )
}