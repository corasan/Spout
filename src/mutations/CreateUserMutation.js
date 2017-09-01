import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import SigninUser from './SigninUserMutation'

const mutation = graphql`
  mutation CreateUserMutation ($input: SignupUserInput!) {
    createUser(input: $input) {
      user {
        id
      }
    }
  }
`

export default (
  firstname: String,
  lastname: String,
  username: String,
  email: String,
  password: String,
) => {
  const variables = {
    input: {
      firstname,
      lastname,
      username,
      influence: 0,
      authProvider: {
        email: {
          email,
          password,
        },
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
        SigninUser(email, password)
      },
      onError: err => console.error(err),
    },
  )
}
