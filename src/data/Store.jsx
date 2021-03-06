import React, { useState } from "react";

export const initialState = {
  number: 1234,
  text: 'Context API #02'
}

// criando context
export const AppContext = React.createContext(initialState)

const Store = props => {
  const [ state, setState ] = useState(initialState)

  /*
    Atualiza valor de estado
  */
  function updateState(key, value) {
    setState({
      ...state,
      [key]: value
    })
  }

  return (
    <AppContext.Provider value={{
      number: state.number,
      text: state.text,
      setNumber: n => updateState('number', n),
      setText: t => updateState('text', t) 
    }}>
      { props.children }
    </AppContext.Provider>
  )
}

export default Store