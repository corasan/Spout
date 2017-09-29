import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const mutation = graphql`
  mutation UpdateUsernameMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        username
      }
    }
  }
`

export default (id, username: string) => {
  const variables = {
    input: {
      id,
      username,
      clientMutationId: '',
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        AsyncStorage.mergeItem('UserProfile', JSON.stringify(response.updateUser.user))
      },
      onError: (error) => console.error(error)
    },
  )
}
