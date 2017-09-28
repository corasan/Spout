import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const mutation = graphql`
  mutation UpdateFirstnameMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        firstname
      }
    }
  }
`

export default (id, firstname: string) => {
  const variables = {
    input: {
      id,
      firstname,
      clientMutationId: '',
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
         console.log('firstname updated')
      },
      onError: (error) => console.error(error)
    },
  )
}
