import { useEffect, useState } from "react"

export const useFetch = (url, method = 'get') => {
  const [ resp, setResp ] = useState({
    data: null,
    loading: true
  })

  useEffect(() => {
    fetch(url, { method: method })
      .then(resp => resp.json())
      .then(json => setResp({
        data: json,
        loading: false
      }))
  }, [ url, method ])

  return resp
}