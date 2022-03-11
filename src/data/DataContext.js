import React from "react";

export const data = {
  number: 123,
  text: "Context API #01"
}

/* Criando contexto */
const DataContext = React.createContext(data)

export default DataContext