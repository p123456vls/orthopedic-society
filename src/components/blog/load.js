import loadable from "@loadable/component";

export const EditModal = loadable(() => import('./post/post-edit/post-edit-modal'))
export const CommentModal = loadable(() => import("./comment/comment-modal.component"));
export const CommentsPopOver = loadable(() => import("./comment/comments-popover.component"));
export const PostDeletePopOver =  loadable(() => import("./post/post-delete/post-delete-popover"));
export const MoreImagesList = loadable(() => import( "./post/all-posts/moreImagesList.component"));
export const ImagePreview = loadable(() => import( "./post/new-post/image-preview.component"));
export const BackButton = loadable(() => import( "./post/post-show/back-button.component"));
export const Image = loadable(() => import( "./post/all-posts/image.component"));
export const CommentsList = loadable(() => import( "./comment/comments-list.component"));
