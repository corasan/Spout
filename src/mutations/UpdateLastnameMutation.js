import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage, AlertIOS } from 'react-native'
import { Actions } from 'react-native-router-flux'

const mutation = graphql`
  mutation UpdateLastnameMutation($input: UpdateUserInput!) {
    updateUser(input: $input) {
      user {
        lastname
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
        AsyncStorage.mergeItem('UserProfile', JSON.stringify(response.updateUser.user))
        AlertIOS.alert(
          'Settings',
          'Name has been changed',
          [{ text: 'Ok', onPress: () => Actions.pop() }]
        )
      },
      onError: (error) => console.error(error)
    },
  )
}
