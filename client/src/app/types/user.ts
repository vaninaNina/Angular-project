export interface UserForAuth {
  username: string;
  _id: string;
  email: string;
  password: string;
}

export interface Profile {
  username: string;
  email: string;
  savedBooks: string[];
  posts: string[];
}
