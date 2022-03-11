import React, { useContext } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";

const UseContext = (props) => {
  /*
  Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.
  O valor de contexto atual é determinado pela prop value do <MyContext.Provider> mais próximo acima do componente
  de chamada na árvore.
  
  Quando o <MyContext.Provider> mais próximo acima do componente for atualizado, este Hook acionará um novo renderizador
  com o value de contexto mais recente passando para o provedor MyContext. Mesmo que um ancestral use React.memo ou 
  shouldComponentUpdate, um renderizador ainda ocorrerá começando no próprio componente usando useContext.
*/

  const { state, setState } = useContext(DataContext);

  function addNumber(delta) {
    setState({
      ...state,
      number: state.number + delta,
    });
  }

  const { number, text, setNumber } = useContext(AppContext);

  return (
    <div className="UseContext">
      <PageTitle
        title="Hook UseContext"
        subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
      />
      <PageTitle
        title="Como Funciona?"
        subtitle="Aceita um objeto de contexto (o valor retornado de React.createContext) e retorna o valor atual do contexto.
        O valor de contexto atual é determinado pela prop value do <MyContext.Provider> mais próximo acima do componente
        de chamada na árvore."
      />
      <PageTitle
        title="Observação"
        subtitle="Quando o <MyContext.Provider> mais próximo acima do componente for atualizado, este Hook acionará um novo renderizador
        com o value de contexto mais recente passando para o provedor MyContext. Mesmo que um ancestral use React.memo ou 
        shouldComponentUpdate, um renderizador ainda ocorrerá começando no próprio componente usando useContext."
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{state.text}</span>
        <span className="text">{state.number}</span>
        <div>
          <button className="btn" onClick={() => addNumber(-1)}>
            -1
          </button>
          <button className="btn" onClick={() => addNumber(+1)}>
            +1
          </button>
        </div>
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <span className="text">{text}</span>
        <span className="text">{number}</span>
        <div>
          <button className="btn" onClick={() => setNumber(number - 1)}>
            -1
          </button>
          <button className="btn" onClick={() => setNumber(number + 1)}>
            +1
          </button>
        </div>
      </div>
    </div>
  );
};

export default UseContext;
