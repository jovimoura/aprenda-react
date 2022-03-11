import React, { useCallback, useState } from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import UseCallbackButtons from "./UseCallbackButtons";

const UseCallback = (props) => {
  const [count, setCount] = useState(0);

  /*
    O useCallback funciona de forma similar ao useMemo, porém ao invés de pré-calcular
    um valor e só traze-lo quando um estado for alterado, o useCallback só irá renderizar
    a função quando outra função for renderizada, como vemos no exemplo abaixo.
    Já que o componente button é estático e nenhum estado dele é alterado, a useCallback
    impede a renderização desnecessária do button.
  */
  const inc = useCallback(
    function (delta) {
      setCount((current) =>
        delta === "zerar" ? (current = 0) : current + delta
      );
    },
    [setCount]
  );
  return (
    <div className="UseCallback">
      <PageTitle
        title="Hook UseCallback"
        subtitle="Retorna uma função memoizada!"
      />
      <PageTitle
        title="Como funciona?"
        subtitle="Recebe como argumentos, um callback e um array. 
        UseCallback retornará uma versão memoizada do callback que só muda se uma 
        das entradas tiverem sido alteradas. Isto é útil quando utilizamos callbacks 
        a fim de otimizar componentes filhos, que dependem da igualdade de referência 
        para evitar renderizações desnecessárias."
      />
      <PageTitle
        title="Observação"
        subtitle="É necessário exportar a função desejada assim: 'export default React.memo(função desejada)'."
      />
      <SectionTitle title="Exercício #01" />
      <div className="center">
        <span className="text">{count}</span>
        <UseCallbackButtons inc={inc} />
      </div>
    </div>
  );
};

export default UseCallback;
