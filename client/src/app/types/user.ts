export interface UserForAuth {
  username: string;
  _id: string;
  email: string;
  password: string;
  accessToken: string;
}

export interface Profile {
  username: string;
  email: string;
  savedBooks: string[];
  posts: string[];
}
