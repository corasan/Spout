import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import { AsyncStorage } from 'react-native'
import { Actions } from 'react-native-router-flux'

const saveUserData = (uid, token) => {
  AsyncStorage.setItem('UserSession', JSON.stringify({ uid, token }))
}

const mutation = graphql`
  mutation SigninUserMutation($input: SigninUserInput!) {
    signinUser(input: $input) {
      token
      user {
        id
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
        saveUserData(response.signinUser.user.id, response.signinUser.token)
        Actions.main()
      },
      onError: err => console.error(err),
    },
  )
}
