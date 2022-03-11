import React, { useMemo, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";

function sum(num1, num2) {
  const a = parseInt(num1)
  const b = parseInt(num2)
  const future = Date.now() + 2000;
  while (Date.now() < future) {} // espera 2 sec
  return a + b;
}

const UseMemo = (props) => {
  const [n1, setN1] = useState(0);
  const [n2, setN2] = useState(0);
  const [n3, setN3] = useState(0);

  /*
    o useMemo retorna um valor memoizado, ou seja, uma valor que foi pré-calculado
    e armazenado numa variável e ele só será chamado caso os valores do array sejam
    alterados.
  */
  const result = useMemo(() => sum(n1, n2), [n1, n2]);

  /*
    Como seria sem useMemo:

    const [n1, setN1] = useState(0);
    const [n2, setN2] = useState(0);

    const [result, setResult] = useState(0)
    useEffect (
      function () {
        setResult(sum(n1,n2))
      },
      [n1,n2]
    )
  */

  return (
    <div className="UseMemo">
      <PageTitle title="Hook UseMemo" subtitle="Retorna um valor memoizado!" />
      <PageTitle title="Como funciona?" subtitle="O useMemo retorna um valor memoizado, ou seja, uma valor que foi pré-calculado
    e armazenado numa variável e ele só será chamado caso os valores do array sejam
    alterados." />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <div>
          <span className="text">{ result }</span>
        </div>
        <input
          type="number"
          className="input"
          value={n1}
          onChange={(e) => setN1(e.target.value)}
        />
        <input
          type="number"
          className="input"
          value={n2}
          onChange={(e) => setN2(e.target.value)}
        />
        <input
          type="number"
          className="input"
          value={n3}
          onChange={(e) => setN3(e.target.value)}
        />
      </div>
    </div>
  );
};

export default UseMemo;
