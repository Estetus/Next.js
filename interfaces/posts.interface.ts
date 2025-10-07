export interface Posts  {
  posts: Post []
}

export interface Post {
  userId: number
  id: number
  title: string
  body: string
}

export interface PostReviews {
  postId: number
  id: number
  name: string
  email: string
  body: string
}

export interface Photo {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}
