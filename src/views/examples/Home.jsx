import React from "react";
import PageTitle from "../../components/layout/PageTitle";

const Home = (props) => (
  <div className="Home">
    <PageTitle
      title="Aprendendo Hooks"
      subtitle="Nesse projeto você aprenderá de maneira simples o que são hooks. Hooks são funcionalidades presentes no React a partir da versão 16.8"
    />

<PageTitle
      title="Observação"
      subtitle="Para um conhecimento mais aprofundado, consulte a página da documentação oficial : https://pt-br.reactjs.org/docs/hooks-reference.html"
    />
  </div>
);

export default Home;
