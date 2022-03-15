import { useState } from "react"

export const useCounter = (value = 100) => {
  const [ count, setCount ] = useState(value)

  function inc() {
    setCount(count + value)
  }

  function dnc() {
    setCount(count - value)
  }

  function zero() {
    setCount(0)
  }

  return [ count, inc, dnc, zero ]
}