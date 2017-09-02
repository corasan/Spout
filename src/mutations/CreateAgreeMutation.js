import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'
import DeleteDisagree from './DeleteDisagreeMutation'

const mutation = graphql`
  mutation CreateAgreeMutation($input: CreateAgreeInput!) {
    createAgree(input: $input) {
      agree {
        id
      }
    }
  }
`

export default (postId: string, userId: string, disagreeId) => {
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
        DeleteDisagree(disagreeId)
      },
      onError: err => console.error(err)
    },
  )
}
