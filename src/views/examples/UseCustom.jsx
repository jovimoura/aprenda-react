import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";
import { useFetch } from "../../hooks/useFetch";

const UseRef = (props) => {
  const [count, inc, dnc, zero] = useCounter(1);

  const url = "http://files.cod3r.com.br/curso-react/estados.json";
  const resp = useFetch(url);

  console.log('RESP>>>',resp)

  function showStates(states) {
    return states.map(state => <li key={state.nome}>{state.nome} - {state.sigla}</li>);
  }

  return (
    <div className="UseCustom">
      <PageTitle
        title="Seu Hook"
        subtitle="Vamos aprender como criar o nosso próprio Hook!"
      />

      <PageTitle
        title="Como funciona?"
        subtitle="A criação de um hook é bem simples, basta seguir a boa norma de usar use antes do nome e separá-lo em uma pasta src/hook"
      />

      <PageTitle
        title="Observação"
        subtitle="Lembre-se de retornar o estado e suas funções em um array"
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <div>
          <button className="btn" onClick={() => inc()}>
            +1
          </button>
          <button className="btn" onClick={() => dnc()}>
            -1
          </button>
          <button className="btn" onClick={() => zero()}>
            Zerar
          </button>
        </div>
      </div>

      <SectionTitle title="Exercício #02" />

      <div className="center">
        <ul>
          {!resp.loading
            ? showStates(resp.data)
            : "Falha no carregamentos dos estados"}
        </ul>
      </div>
    </div>
  );
};

export default UseRef;
