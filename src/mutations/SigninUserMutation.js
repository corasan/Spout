import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const saveUserSession = (uid, username, token) => {
  AsyncStorage.setItem('UserSession', JSON.stringify({ uid, username, token }))
}

const saveUserProfile = (firstname, lastname, email, username) => {
  AsyncStorage.setItem('UserProfile', JSON.stringify({ firstname, lastname, email, username }))
}

const mutation = graphql`
  mutation SigninUserMutation($input: SigninUserInput!) {
    signinUser(input: $input) {
      token
      user {
        id
        username
        firstname
        lastname
        email
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
        saveUserSession(data.user.id, data.user.username, data.token)
        saveUserProfile(
          data.user.firstname,
          data.user.lastname,
          data.user.email,
          data.user.username
        )
        Actions.replace('main')
      },
      onError: err => console.error(err),
    },
  )
}
