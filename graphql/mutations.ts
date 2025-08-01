import { gql } from "@apollo/client"

export const CREATE_POST = gql`
    mutation CreatePost($content: String!, $media: [MediaInput!]){
        createPost(content: $content, media:$media) {
            id
            content
            createdAt
            likes
            liked
            shares
            shared
            media{
                type
                url
                alt
            }
            author{
                id
                name
                username
                avatar
                isVerified
            }
        }
    }
`;

export const ADD_COMMENT = gql`
mutation CommentOnPost($postId: ID!, $content: $String!){
commentOnPost(postId:$postId, content: $content){
        id
        content
        createdAt
        likes
        liked
        author{
            id
            name
            username
            avatar
        }
    }
}
`;

