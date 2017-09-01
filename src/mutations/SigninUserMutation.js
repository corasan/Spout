import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

// TODO: Fix - user id not in the payload
const mutation = graphql`
  mutation SigninUserMutation ($input: SigninUserInput!) {
    signinUser (input: $input) {
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
  callback: () => void,
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
        console.log('UID', response.signinUser)
        callback(response.signinUser.user.id, response.signinUser.token)
      },
      onError: err => console.error(err),
    },
  )
}
