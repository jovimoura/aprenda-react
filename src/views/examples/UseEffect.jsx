import React, { useEffect, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num) {
  const n = parseInt(num);
  if (n < 0) return -1;
  if (n === 0) return 1;
  return calcFactorial(n - 1) * n;
}

function parOuImpar(num) {
  return num % 2 === 0 ? "Par" : "Ímpar";
}

const UseEffect = (props) => {
  const [number, setNumber] = useState(1);
  const [factorial, setFactorial] = useState(1);

  /*
    Para utilização do UseEffect, você precisa passar dois paramêtros, sendo o primeiro
    uma callback que executará algo quando ele for gerar o efeito colateral e o segundo
    será uma lista de dependências, ou seja, quando algum dos valores da lista for
    modificado, o useEffect irá chamar a função callback passada no primeiro paramêtro.
  */

  /*
    OBS: chamar uma função, como a setFactorial, fora do useEffect gerará um loop infinito
    no código e a página não será carregada.
  */
  useEffect(
    function () {
      setFactorial(calcFactorial(number));
    },
    [number]
  );

  const [num, setNum] = useState(0);
  const [tipo, setTipo] = useState("Par");

  useEffect(
    function () {
      setTipo(parOuImpar(num));
    },
    [num]
  );
  return (
    <div className="UseEffect">
      <PageTitle
        title="Hook UseEffect"
        subtitle="Permite executar efeitos colaterais em componentes funcionais!"
      />
      <PageTitle
        title="Como funciona?"
        subtitle="Para utilização do UseEffect, você precisa passar dois paramêtros, sendo o primeiro
        uma callback que executará algo quando ele for gerar o efeito colateral e o segundo
        será uma lista de dependências, ou seja, quando algum dos valores da lista for
        modificado, o useEffect irá chamar a função callback passada no primeiro paramêtro."
      />

      <PageTitle
        title="Observação"
        subtitle="Chamar uma função, como a setFactorial, fora do useEffect gerará um loop infinito
        no código e a página não será carregada."
      />

      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">Fatorial: </span>
          <span className="text red">
            {factorial === -1 ? "Não existe" : factorial}
          </span>
        </div>
        <input
          type="number"
          className="input"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
      </div>
      <SectionTitle title="Exercício #02" />
      <div className="center">
        <div>
          <span className="text">É Par ou Ímpar?: </span>
          <span className="text red">{tipo}</span>
        </div>
        <input
          type="number"
          className="input"
          value={num}
          onChange={(e) => setNum(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseEffect;
