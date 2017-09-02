import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateDisagreeMutation($input: CreateDisagreeInput!) {
    createDisagree(input: $input) {
      disagree {
        id
      }
    }
  }
`

export default (postId: string, userId: string) => {
  const variables = {
    input: {
      postId,
      userId,
      clientMutationId: '',
    },
  }
  commitMutation(
    environment,
    {
      mutation,
      variables,
      onComplete: (response) => {
        console.log(response)
      },
      onError: (err) => console.error(err)
    },
  )
}
