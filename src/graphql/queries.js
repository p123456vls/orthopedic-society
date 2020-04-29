/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getBlog = `query GetBlog($id: ID!) {
  getBlog(id: $id) {
    id
    name
    posts {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const listBlogs = `query ListBlogs(
  $filter: ModelBlogFilterInput
  $limit: Int
  $nextToken: String
) {
  listBlogs(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      name
      posts {
        nextToken
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getPost = `query GetPost($id: ID!) {
  getPost(id: $id) {
    id
    title
    description
    file {
      bucket
      region
      key
    }
    blog {
      id
      name
      posts {
        nextToken
      }
      createdAt
    }
    user {
      id
      name
      email
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const listPosts = `query ListPosts(
  $filter: ModelPostFilterInput
  $limit: Int
  $nextToken: String
) {
  listPosts(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      title
      description
      file {
        bucket
        region
        key
      }
      blog {
        id
        name
        createdAt
      }
      user {
        id
        name
        email
        createdAt
      }
      comments {
        items{
           id
           content
          user{
            id
            name
          }
           createdAt
        }
        nextToken
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getComment = `query GetComment($id: ID!) {
  getComment(id: $id) {
    id
    content
    file {
      bucket
      region
      key
    }
    user {
      id
      name
      email
      posts {
        nextToken
      }
      comments {
        nextToken
      }
      createdAt
    }
    post {
      id
      title
      description
      file {
        bucket
        region
        key
      }
      blog {
        id
        name
        createdAt
      }
      user {
        id
        name
        email
        createdAt
      }
      comments {
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const listComments = `query ListComments(
  $filter: ModelCommentFilterInput
  $limit: Int
  $nextToken: String
) {
  listComments(filter: $filter, limit: $limit, nextToken: $nextToken) {
    items {
      id
      content
      file {
        bucket
        region
        key
      }
      user {
        id
        name
        email
        createdAt
      }
      post {
        id
        title
        description
        createdAt
      }
      createdAt
    }
    nextToken
  }
}
`;
export const getUser = `query GetUser($id: ID!) {
  getUser(id: $id) {
    id
    name
    email
    posts {
      items {
        id
        title
        description
        createdAt
      }
      nextToken
    }
    comments {
      items {
        id
        content
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const searchPosts = `query SearchPosts(
  $filter: SearchablePostFilterInput
  $sort: SearchablePostSortInput
  $limit: Int
  $nextToken: String
) {
  searchPosts(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      title
      description
      file {
        bucket
        region
        key
      }
      blog {
        id
        name
        createdAt
      }
      user {
        id
        name
        email
        createdAt
      }
      comments {
        nextToken
      }
      createdAt
    }
    nextToken
    total
  }
}
`;
export const searchComments = `query SearchComments(
  $filter: SearchableCommentFilterInput
  $sort: SearchableCommentSortInput
  $limit: Int
  $nextToken: String
) {
  searchComments(
    filter: $filter
    sort: $sort
    limit: $limit
    nextToken: $nextToken
  ) {
    items {
      id
      content
      file {
        bucket
        region
        key
      }
      user {
        id
        name
        email
        createdAt
      }
      post {
        id
        title
        description
        createdAt
      }
      createdAt
    }
    nextToken
    total
  }
}
`;
