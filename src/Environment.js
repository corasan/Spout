import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { AsyncStorage } from 'react-native'
import graphcoolEnpoint from '../graphcoolEndpoint'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  return AsyncStorage.getItem('User', (error, data) => {
    return JSON.parse(data)
  }).then((obj) => {
    const user = JSON.parse(obj)
    return fetch(graphcoolEnpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        // 'Authorization': `Bearer ${user.token}`
      },
      body: JSON.stringify({
        query: operation.text,
        variables,
      }),
    }).then(response => response.json())
  })
})

const environment = new Environment({
  network,
  store,
})

export default environment
