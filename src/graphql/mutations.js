/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createBlog = `mutation CreateBlog(
  $input: CreateBlogInput!
  $condition: ModelBlogConditionInput
) {
  createBlog(input: $input, condition: $condition) {
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
export const updateBlog = `mutation UpdateBlog(
  $input: UpdateBlogInput!
  $condition: ModelBlogConditionInput
) {
  updateBlog(input: $input, condition: $condition) {
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
export const deleteBlog = `mutation DeleteBlog(
  $input: DeleteBlogInput!
  $condition: ModelBlogConditionInput
) {
  deleteBlog(input: $input, condition: $condition) {
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
export const createPost = `mutation CreatePost(
  $input: CreatePostInput!
  $condition: ModelPostConditionInput
) {
  createPost(input: $input, condition: $condition) {
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
export const updatePost = `mutation UpdatePost(
  $input: UpdatePostInput!
  $condition: ModelPostConditionInput
) {
  updatePost(input: $input, condition: $condition) {
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
        user {
           id
           name
           email
        }
        createdAt
      }
      nextToken
    }
    createdAt
  }
}
`;
export const deletePost = `mutation DeletePost(
  $input: DeletePostInput!
  $condition: ModelPostConditionInput
) {
  deletePost(input: $input, condition: $condition) {
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
export const createComment = `mutation CreateComment(
  $input: CreateCommentInput!
  $condition: ModelCommentConditionInput
) {
  createComment(input: $input, condition: $condition) {
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
export const updateComment = `mutation UpdateComment(
  $input: UpdateCommentInput!
  $condition: ModelCommentConditionInput
) {
  updateComment(input: $input, condition: $condition) {
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
export const deleteComment = `mutation DeleteComment(
  $input: DeleteCommentInput!
  $condition: ModelCommentConditionInput
) {
  deleteComment(input: $input, condition: $condition) {
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
        items{
           id
          }
        nextToken
      }
      createdAt
    }
    createdAt
  }
}
`;
export const registerUser = `mutation RegisterUser(
  $input: CreateUserInput!
  $condition: ModelUserConditionInput
) {
  registerUser(input: $input, condition: $condition) {
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
export const updateUser = `mutation UpdateUser(
  $input: UpdateUserInput!
  $condition: ModelUserConditionInput
) {
  updateUser(input: $input, condition: $condition) {
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
