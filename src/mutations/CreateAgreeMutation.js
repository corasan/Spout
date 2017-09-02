import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreateAgreeMutation($input: CreateAgreeInput!) {
    createAgree(input: $input) {
      agree {
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
