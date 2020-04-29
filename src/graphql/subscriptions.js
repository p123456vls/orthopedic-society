/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateBlog = `subscription OnCreateBlog {
  onCreateBlog {
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
export const onUpdateBlog = `subscription OnUpdateBlog {
  onUpdateBlog {
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
export const onDeleteBlog = `subscription OnDeleteBlog {
  onDeleteBlog {
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
export const onCreatePost = `subscription OnCreatePost {
  onCreatePost {
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
export const onUpdatePost = `subscription OnUpdatePost {
  onUpdatePost {
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
export const onDeletePost = `subscription OnDeletePost {
  onDeletePost {
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
export const onCreateComment = `subscription OnCreateComment {
  onCreateComment {
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
export const onUpdateComment = `subscription OnUpdateComment {
  onUpdateComment {
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
export const onDeleteComment = `subscription OnDeleteComment {
  onDeleteComment {
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
