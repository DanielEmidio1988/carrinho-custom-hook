import useCounter from "../hooks/useCounter"
import {Item} from "./Item"

function Cart() {
  const [quantity, soma, subtracao, resetar] = useCounter(0);

  return (
    <>
      <div className="Cart">
      <h1>Meu Carrinho</h1>
      <Item
        label="Meu produto massa"
        quantidade={quantity}
        soma={soma}
        subtracao={subtracao}
        resetar={resetar}
      />
      </div>
    

    </>
  );
}

export default Cart