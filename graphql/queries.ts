import { gql } from "@apollo/client";

export const GET_TIMELINE = gql`
    query GetTimeline($limit: Int!, $offset:Int!){
        timeline(limit: $limit, offset:$offset){
            id
            content
            createdAt
            likes
            liked
            shares
            shared
            media {
               type
               url
               alt
            }
            author{
                id
                content
                createdAt
                likes
                liked
                author {
                   id
                   name
                   username
                   avatar
                }
            }
        }
    }
`;

export const GET_USER = gql`
    query GetUser($id:ID!) {
        user(id: $id) {
            id
            name
            username
            avatar
            bio
            joinDate
            followingCount
            followersCount
            isVerified
        }
    }
`;

export const GET_USER_POSTS = gql`
    query GetUserPosts($userId: ID!, $limit: Int!, $offset: Int!) {
        userPosts(userId: $userId, limit: $limit, offset: $offset) {
            id
            content
            createdAt
            likes
            liked
            shares
            shared
            media {
                type
                url
                alt
            }
            comments {
                id
                content
                createdAt
                likes
                liked
                author {
                    id
                    name
                    username
                    avatar
                }
            }
        }
    }
`;
