import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

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
  callback: () => void,
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
      onCompleted: () => {
        if (callback) {
          callback()
        } else {
          console.log('User creation success!')
        }
      },
      onError: err => console.error(err),
    },
  )
}
