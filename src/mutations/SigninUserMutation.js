import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const saveUserData = (uid, username, token) => {
  AsyncStorage.setItem('UserSession', JSON.stringify({ uid, username, token }))
}

const mutation = graphql`
  mutation SigninUserMutation($input: SigninUserInput!) {
    signinUser(input: $input) {
      token
      user {
        id
        username
      }
    }
  }
`

export default (
  email: string,
  password: string,
) => {
  const variables = {
    input: {
      email: {
        email,
        password,
      },
      clientMutationId: '',
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: (response) => {
        const data = response.signinUser
        saveUserData(data.user.id, data.user.username, data.token)
        Actions.replace('main')
      },
      onError: err => console.error(err),
    },
  )
}
