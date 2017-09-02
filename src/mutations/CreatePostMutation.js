import { commitMutation, graphql } from 'react-relay'
import environment from '../Environment'

const mutation = graphql`
  mutation CreatePostMutation($input: CreatePostInput!) {
    createPost(input: $input) {
      post {
        id
      }
    }
  }
`

export default (content: string, authorId: string) => {
  const variables = {
    input: {
      content,
      authorId,
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
    },
  )
}
