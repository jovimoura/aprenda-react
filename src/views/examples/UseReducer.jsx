import React, { useReducer } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

const initialState = {
  cart: [],
  products: [],
  user: null,
  // foco...
  number: 0,
};

function reducer(state, action) {
  switch (action.type) {
    case "add2ToNumber":
      return { ...state, number: state.number + 2 };
    case "reduce2ToNumber":
      return { ...state, number: state.number - 2 };
    case "zero":
      return { ...state, number: (state.number = 0) };
    default:
      return state;
  }
}

const UseReducer = (props) => {
  /*
    O useReducer retorna um array com um estado e uma função e deve
    receber a função e o estado que vão ser trabalhados
  */
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="UseReducer">
      <PageTitle
        title="Hook UseReducer"
        subtitle="Uma outra forma de ter estado em componentes funcionais!"
      />

      <PageTitle
        title="Como funciona?"
        subtitle="Uma alternativa para useState. Aceita um reducer do tipo 
        (state, action) => newState e retorna o estado atual, junto com um método dispatch. 
        (Se você está familiarizado com o Redux, você já sabe como isso funciona.)"
      />
      <PageTitle
        title=""
        subtitle="
        UseReducer é geralmente preferível em relação ao useState quando se tem uma lógica
        de estado complexa que envolve múltiplos sub-valores, ou quando o próximo estado
        depende do estado anterior. useReducer também possibilita a otimização da performance
        de componentes que disparam atualizações profundas porque é possível passar o dispatch
        para baixo, ao invés de callbacks."
      />

      <PageTitle 
        title="Observação"
        subtitle="Recomendo que analise o código desta página para melhor compreensão."
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button
            className="btn"
            onClick={() => dispatch({ type: "reduce2ToNumber" })}
          >
            -2
          </button>
          <button
            className="btn"
            // Através do dispatch, envie o type da action, e com o switch
            // trabalhe com esse type.
            onClick={() => dispatch({ type: "add2ToNumber" })}
          >
            +2
          </button>
          <button className="btn" onClick={() => dispatch({ type: "zero" })}>
            Zerar
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseReducer;
