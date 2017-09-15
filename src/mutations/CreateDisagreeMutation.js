import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import DeleteAgree from './DeleteAgreeMutation'

const mutation = graphql`
  mutation CreateDisagreeMutation($input: CreateDisagreeInput!) {
    createDisagree(input: $input) {
      disagree {
        id
      }
    }
  }
`

export default (postId: string, userId: string, agreeId: string) => {
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
      onCompleted: (response) => {
        console.log(response)
        DeleteAgree(agreeId)
      },
      onError: err => console.error(err)
    },
  )
}
