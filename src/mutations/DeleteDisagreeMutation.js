import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation DeleteDisagreeMutation($input: DeleteDisagreeInput!) {
    deleteDisagree(input: $input) {
      deletedId
    }
  }
`

export default (id) => {
  const variables = {
    input: {
      id,
      clientMutationId: '',
    },
  }

  commitMutation(
    environment,
    {
      mutation,
      variables,
      onCompleted: response => console.log(response),
      onError: err => console.error(err)
    }
  )
}
