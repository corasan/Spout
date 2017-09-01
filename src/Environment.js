import { Environment, Network, RecordSource, Store } from 'relay-runtime'
import { AsyncStorage } from 'react-native'
import graphcoolEnpoint from '../graphcoolEndpoint'

const store = new Store(new RecordSource())

const network = Network.create((operation, variables) => {
  return AsyncStorage.getItem('UserSession', (error, data) => {
    if (data) {
      return data
    }
  }).then((data) => {
    const user = JSON.parse(data)
    return fetch(graphcoolEnpoint, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': user ? `Bearer ${user.token}` : '',
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
