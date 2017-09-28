import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const mutation = graphql`
  mutation UpdateLastnameMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        firstname
      }
    }
  }
`

export default (id, lastname: string) => {
  const variables = {
    input: {
      id,
      lastname,
      clientMutationId: '',
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
         console.log('lastname updated')
      },
      onError: (error) => console.error(error)
    },
  )
}
